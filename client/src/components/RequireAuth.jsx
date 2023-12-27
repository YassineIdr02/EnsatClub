import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    const role = localStorage.getItem("role")?.toString().toUpperCase()

    if (Cookies.get('token')) {
        if (allowedRoles.includes(role))
            return <Outlet />
        else
            return <Navigate to="/unauthorized" state={{ from: location }} />


    } else return <Navigate to="/" state={{ from: location }} replace />
};

export default RequireAuth;
