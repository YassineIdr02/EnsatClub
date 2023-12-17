import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = () => {
    const location = useLocation();

    if (!Cookies.get('token')) {
        return (
            <>
                <ToastContainer />
                <Navigate to="/" state={{ from: location }} replace={()=>toast.error("Please login first")} />
            </>
        );
    }

    return <Outlet />;


};

export default RequireAuth;
