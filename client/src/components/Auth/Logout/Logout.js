import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../../contexts/UserContext";

export function Logout() {
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        // TODO: send request to the server
        updateUser(null);
        navigate('/', {replace: true});
        toast.success('You successfully logged out!');
    }, [updateUser, navigate]);

    return null;
}