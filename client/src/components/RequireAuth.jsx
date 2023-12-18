import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import PresLayout from '../layouts/PresLayout';
import AdminLayout from '../layouts/AdminLayout';

const RequireAuth = ({allowedRoles}) => {
    const location = useLocation();
    const role = localStorage.getItem('role')?.toString().toUpperCase()
    console.log(role);
    
    if (Cookies.get('token')) {
        if(role ==='ADMIN' )
             return  <AdminLayout />
        else if(role === 'PRESIDANT')
            return <PresLayout /> 
        return <Navigate to="/" state={{from:location}} replace/>;
    }
    return <Navigate to="/" state={{ from: location }} replace />


};

export default RequireAuth;
