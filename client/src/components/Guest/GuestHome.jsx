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
    
    return (
        <div className="bg-[#dfe8e8] min-h-screen">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GuestHome
