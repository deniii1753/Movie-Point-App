import { useContext } from "react";
import UserModalContext from "../../../contexts/UserModalContext";

import styles from './GuestLinks.module.css';

export function GuestLinks() {
    const [openLoginModal, openRegisterModal] = useContext(UserModalContext);

    return (
        <>
            <li><button className={styles["guest-buttons"]} onClick={openLoginModal}>Login</button></li>
            <li><button className={styles["guest-buttons"]} onClick={openRegisterModal}>Register</button></li>
        </>
    )
}