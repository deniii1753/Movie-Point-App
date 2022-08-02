import { NavLink, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import styles from './AdminPanelHeader.module.css';

export function AdminPanelHeader() {
    const navigate = useNavigate();
    const className = ({ isActive }) => isActive ? styles.active : undefined;

    function backClickHandler(e) {
        e.preventDefault();
        return navigate('/');
    }

    return (
        <div className={styles["header"]}>
            <a href="/" className={styles["admin-back-button"]} onClick={backClickHandler} title="Back"><BiArrowBack size={25} /></a>
            <h1 className={styles["header-text"]}>Admin Panel</h1>
            <nav>
                <ul className={styles["navigation-ul"]}>
                    <li><NavLink to="/adminPanel/users" className={className}>Users</NavLink></li>
                    <li><NavLink to="/adminPanel/movies" className={className}>Movies</NavLink></li>
                    <li><NavLink to="/adminPanel/genres" className={className}>Genres</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}