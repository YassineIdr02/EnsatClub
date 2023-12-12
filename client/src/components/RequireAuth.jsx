import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const RequireAuth = () => {
    const auth = useAuth()
    const location = useLocation()
    useEffect(()=>{
        console.log(auth)
    },[])

  return (
    auth ? <Outlet/> : <Navigate to="/" state={{ from: location}} replace />

  )
}

export default RequireAuth
