import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    username: localStorage.getItem('username') || '',
    role: localStorage.getItem('role') || '',
    accessToken: localStorage.getItem('token') || '',
    status: 'idle' // Possible values: idle, loading, succeeded, failed
};

export const handleLogin = createAsyncThunk('login/handleLogin', async (userInfo) => {
    try {
        const formData = new FormData();
        formData.append('username', userInfo.username);
        formData.append('password', userInfo.password);

        const response = await axios.post('http://localhost:8082/login', formData);
        const { accessToken, username, role } = response.data;

        // Update localStorage and return response data
        localStorage.setItem('token', accessToken);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Reject the promise, allowing Redux Toolkit to handle errors
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Other reducers if needed
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            // Update state with payload data after successful login
            const { username, accessToken, role } = action.payload;
            state.username = username;
            state.accessToken = accessToken;
            state.role = role;
            state.status = 'succeeded'; // Update status after successful login
        });
        builder.addCase(handleLogin.pending, (state) => {
            state.role = null;
            state.username= null;
            state.status = 'loading'; // Update status while login request is pending
        });
        builder.addCase(handleLogin.rejected, (state) => {
            state.status = 'failed'; // Update status if login request fails
        });
    }
});

export default userSlice.reducer;
export const getToken = () => localStorage.getItem("token");
export const getStatus = (state) => state.user.status;
