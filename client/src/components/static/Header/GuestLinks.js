import { useContext } from "react";
import UserModalContext from "../../../contexts/UserModalContext";

export function GuestLinks() {
    const [openLoginModal, openRegisterModal] = useContext(UserModalContext);
    console.log(openLoginModal);
    // function clickHandler(e) {
    //     e.preventDefault();

    //     if(e.target.href.endsWith('login')) openModal('login');
    //     if(e.target.href.endsWith('register')) openModal('register');

    // }

    return (
        <>
            <li><button href="/login" onClick={openLoginModal}>Login</button></li>
            <li><button href="/register" onClick={openRegisterModal}>Register</button></li>
        </>
    )
}