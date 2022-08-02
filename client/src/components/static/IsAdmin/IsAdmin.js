import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import UserContext from "../../../contexts/UserContext";

export function IsAdmin() {
    const { user } = useContext(UserContext);

    if (user.role !== 'admin') {
        toast.error('You are not authenticated to view this page!');
        return <Navigate to="/" replace/>
    }

    return <Outlet />
}