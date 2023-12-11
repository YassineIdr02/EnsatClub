import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    user:{
        id:'',
        username: '',
        password: '',
    },
    token: ''
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
            state.user = action.payload.user
            state.token = action.payload.token
            
        })
    }
})

export default userSlice.reducer