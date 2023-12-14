import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from '../features/user/userSlice';
import { useEffect, useState } from "react";

const RequireAuth = () => {
    const location = useLocation();
    const tokenFromRedux = useSelector(getToken); // Get token from Redux state

    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
