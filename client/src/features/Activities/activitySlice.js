import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    content: null,
    clubName: null ,
    date: null,
    status: 'idle' // Possible values: idle, loading, succeeded, failed
};

export const fetchPosts = createAsyncThunk('activity/fetchPosts', async (activityData) => {
    try {
        const formData = new FormData();
        formData.append('content', userInfo.username);
        formData.append('description', userInfo.password);

        const response = await axios.post('http://localhost:8082/activity', formData);
        return response.data;
    } catch (error) {
        toast.error("Oops, something went wrong!")
        console.error("Error:", error);
    }
});

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        // Other reducers if needed
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
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
