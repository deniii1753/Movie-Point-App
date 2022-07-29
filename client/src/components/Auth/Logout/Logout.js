import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../../contexts/UserContext";

export function Logout() {
    const { updateUser } = useContext(UserContext);

    useEffect(() => {
        // TODO: Logout endpoint on the server
        updateUser(null);
        toast.success('You successfully logged out!');
    }, [updateUser]);

    return <Navigate to="/" replace/>;
}