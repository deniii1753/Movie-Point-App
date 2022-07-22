import { useContext } from "react";
import UserModalContext from "../../../contexts/UserModalContext";

export function GuestLinks() {
    const openModal = useContext(UserModalContext);

    function clickHandler(e) {
        e.preventDefault();

        if(e.target.href.endsWith('login')) openModal('login');
        if(e.target.href.endsWith('register')) openModal('register');

    }

    return (
        <>
            <li><a href="/login" onClick={clickHandler}>Login</a></li>
            <li><a href="/register" onClick={clickHandler}>Register</a></li>
        </>
    )
}