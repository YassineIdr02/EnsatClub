import { getToken } from "../features/user/userSlice";
import { useSelector } from "react-redux";

export const useAuth = () => {
    return useSelector(getToken)
}

