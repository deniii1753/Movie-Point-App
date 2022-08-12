import { useContext, useState } from 'react';
import { FaExclamation } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import UserContext from '../../../../contexts/UserContext';

import styles from './UserAdminModal.module.css';
import mainStyles from '../../Modals.module.css';

import * as userService from '../../../../services/userService';
import AdminPanelUsersContext from '../../../../contexts/AdminPanelUsersContext';
import { toast } from 'react-toastify';
import { Spinner } from '../../../Spinner/Spinner';

export function UserAdminModal({ closeHandler, user }) {
    const { user: adminUser } = useContext(UserContext);
    const { editUser } = useContext(AdminPanelUsersContext);
    const [isLoading, setIsLoading] = useState(false);

    if(isLoading) return <Spinner />

    function closeModal(e) {
        if (e.target.className === 'modal') return closeHandler();
    }

    function changeRoleHandler() {
        const newRole = user.role === 'admin' ? 'user' : 'admin';
        const {_creationDate, ...newUser} = user;
        setIsLoading(true);

        userService.editUser(user._id, { ...newUser, role: newRole }, adminUser['X-Auth-Token'])
            .then(data => {
                setIsLoading(false);
                editUser(data);
                toast.success(`You successfully changed ${user.username}'s role!`);
                closeHandler();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message);
            });
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className={styles["alert_box"]}>
                <button className={mainStyles["btn-close"]} onClick={closeHandler} ><AiOutlineClose size={20} /></button>
                <div className={styles["icon"]}>
                    <i className={styles["material-icons"]}><FaExclamation /></i>
                </div>
                <header>Confirm</header>

                {user.role === 'admin'
                    ? <p>Are you sure you want to remove <b>{user.username}'s</b> admin role?</p>
                    : <p>Are you sure you want to make <b>{user.username}</b> admin?</p>
                }

                <div className={styles["btns"]}>
                    <button htmlFor="check" onClick={changeRoleHandler}>Yes</button>
                    <button htmlFor="check" onClick={closeHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}