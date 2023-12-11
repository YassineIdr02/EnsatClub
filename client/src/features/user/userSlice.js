import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    username: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        Login:  (state, action) =>{

        }
    }
})

export default userSlice.reducer