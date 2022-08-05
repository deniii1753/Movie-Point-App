import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import UserContext from '../../../../contexts/UserContext';

import styles from '../../AdminPanelTable.module.css';

import { useModal } from '../../../../hooks/useModal';

import { AdminPanelUserRow } from './AdminPanelUserRow/AdminPanelUserRow';
import { UserEditModal } from '../UserEditModal/UserEditModal';
import { UserDeleteModal } from '../UserDeleteModal/UserDeleteModal';
import { UserAdminModal } from '../UserAdminModal/UserAdminModal';
import { UserCreateModal } from '../UserCreateModal/UserCreateModal';

import * as userService from '../../../../services/userService';

export function AdminPanelUsersTable({ users }) {
    const [selectedUser, setSelectedUser] = useState({});
    const { user } = useContext(UserContext);

    const { isModalOpened: isEditOpened, openModal: openEdit, closeModal: closeEdit } = useModal();
    const { isModalOpened: isDeleteOpened, openModal: openDelete, closeModal: closeDelete } = useModal();
    const { isModalOpened: isAdminOpened, openModal: openAdmin, closeModal: closeAdmin } = useModal();
    const { isModalOpened: isCreateOpened, openModal: openCreate, closeModal: closeCreate } = useModal();



    async function openModal(modalName, userId) {
        try {
            const userFromDb = await userService.getUser(userId, user['X-Auth-Token'])

            if (modalName === 'Edit') openEdit();
            if (modalName === 'Delete') openDelete();
            if (modalName === 'Make Admin') openAdmin();
            if (modalName === 'Remove Admin') openAdmin();

            setSelectedUser(userFromDb);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <>
                {isEditOpened && <UserEditModal closeHandler={closeEdit} user={selectedUser} />}
                {isDeleteOpened && <UserDeleteModal closeHandler={closeDelete} user={selectedUser} />}
                {isAdminOpened && <UserAdminModal closeHandler={closeAdmin} user={selectedUser} />}
                {isCreateOpened && <UserCreateModal closeHandler={closeCreate} />}
                
            <div className={styles["table-wrapper"]}>


                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Created On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(x =>
                            <AdminPanelUserRow
                                key={x._id}
                                user={x}
                                openModal={openModal}
                            />
                        )}

                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`} onClick={openCreate}>Add new user</button>
        </>
    );
}