import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {toast} from 'react-toastify';

import mainStyles from '../../Modals.module.css';
import styles from './UserDeleteModal.module.css';

import UserContext from '../../../../contexts/UserContext';
import * as userService from '../../../../services/userService';
import AdminPanelUsersContext from '../../../../contexts/AdminPanelUsersContext';


export function UserDeleteModal({ closeHandler, user }) {
    const {user: adminUser} = useContext(UserContext);
    const {deleteUser} = useContext(AdminPanelUsersContext);

    function deleteHandler() {
        userService.deleteUser(user._id, adminUser['X-Auth-Token'])
            .then(() => {
                deleteUser(user._id);
                toast.success(`You successfully deleted ${user.username}!`)
                closeHandler();
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className={mainStyles["overlay"]}>
            <div className={mainStyles["backdrop"]} onClick={closeHandler}></div>
            <div className={mainStyles["modal"]}>
                <div>
                    <header className={mainStyles["headers"]}>
                        <h2 className={styles["confirmation-text"]}>Are you sure you want to delete this user?</h2>
                        <button className={mainStyles["btn-close"]} onClick={closeHandler}><AiOutlineClose size={20} /></button>
                    </header>
                    <div className={styles["actions"]}>
                        <div className={styles["buttons"]}>
                            <button className={mainStyles["action-save"]} onClick={deleteHandler}>Delete</button>
                            <button className={mainStyles["action-cancel"]} onClick={closeHandler}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}