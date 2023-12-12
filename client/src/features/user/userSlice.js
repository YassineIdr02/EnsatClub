import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    username: '',
    role: '',        
    token: 'token',
    status: 'idle' // idle loading succeed failed
}

export const handleLogin = createAsyncThunk('login/handleLogin', async (userInfo) => {
    try {
        const response = await axios.post('URL', userInfo)
        return response.data
    } catch (error) {
        
    }

})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        Login:  (state, action) =>{

        }
    },extraReducers(builder){
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.username = action.payload.username
            state.token = action.payload.token
            state.role = action.payload.role

        })
    }
})

export default userSlice.reducer
export const getToken = (state) => state.user.token