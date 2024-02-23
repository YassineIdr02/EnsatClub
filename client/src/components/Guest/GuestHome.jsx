import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import NavBar from '../Admin/NavBar'
import { useState, useEffect } from 'react'
import { useLoginMutation } from '../../features/user/authApiSlice'
import { setCredentials } from '../../features/user/userSlice'

const GuestHome = () => {
    const dispatch = useDispatch()
    
    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        try {
            const user = new FormData();
            user.append('username', "Yassine47a");
            user.append('password', "47a05545-");
            const userData = login(user).unwrap();
            dispatch(setCredentials(userData));
            console.log(userData)
        } catch (error) {
            console.log(error);
        }
      
    }, [])
    
    return (
        <div className="bg-[#dfe8e8] min-h-screen">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GuestHome
