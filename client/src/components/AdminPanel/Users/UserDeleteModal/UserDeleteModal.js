import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

import mainStyles from '../../Modals.module.css';
import styles from '../../DeleteModal.module.css';

import UserContext from '../../../../contexts/UserContext';
import * as userService from '../../../../services/userService';
import AdminPanelUsersContext from '../../../../contexts/AdminPanelUsersContext';


export function UserDeleteModal({ closeHandler, user }) {
    const { user: adminUser } = useContext(UserContext);
    const { deleteUser } = useContext(AdminPanelUsersContext);

    function deleteHandler() {
        userService.deleteUser(user._id, adminUser['X-Auth-Token'])
            .then(() => {
                deleteUser();
                toast.success(`You successfully deleted ${user.username}!`)
                closeHandler();
            })
            .catch(err => toast.error(err.message));
    }

    function closeModal(e) {
        if (e.target.className === 'modal') return closeHandler();
    }
    
    return (
        <div className="modal" onClick={closeModal}>
            <div className={styles["alert_box"]}>
                <button className={mainStyles["btn-close"]} onClick={closeHandler} ><AiOutlineClose size={20} /></button>
                <div className={styles["icon"]}>
                    <i className={styles["material-icons"]}><AiOutlineClose /></i>
                </div>
                <header>Confirm</header>

                <p>Are you sure you want to delete <b>{user.username}</b> user?</p>

                <div className={styles["btns"]}>
                    <button htmlFor="check" onClick={deleteHandler}>Yes</button>
                    <button htmlFor="check" onClick={closeHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}