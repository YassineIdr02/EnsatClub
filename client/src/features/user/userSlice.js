import {  createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    username: localStorage.getItem("username")  || null ,
    role: localStorage.getItem("role") || null,
    accessToken: Cookies.get("token") || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {username, accessToken, role} = action.payload

            state.username = username
            state.accessToken = accessToken
            state.role = role

            // storing data in localstorage
            localStorage.setItem('username',username)
            localStorage.setItem('role',role)
            Cookies.set('token',accessToken)
        },

        logout: (state) => {
            state.accessToken = null
            state.role= null
            state.username = null

            localStorage.clear()
            Cookies.remove('token')
        }
    }
});

export default userSlice.reducer;
export const getToken = (state) => state.user.accessToken;
export const getUsername = (state) => state.user.username;
export const {setCredentials, logout } = userSlice.actions

