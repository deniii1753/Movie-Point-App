import { useEffect, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import styles from './AdminPanelUsersTable.module.css';

import UserContext from '../../../../contexts/UserContext';

import { AdminPanelUserRow } from './AdminPanelUserRow/AdminPanelUserRow';

import * as userService from '../../../../services/userService';

export function AdminPanelUsersTable() {
    const [users, setUsers] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        userService.getUsers(0, 8, user['X-Auth-Token'])
            .then(data => setUsers(data))
            .catch(err => toast.error(err.message));
    }, [user]);
    return (
        <>
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

                        {users.map(x => <AdminPanelUserRow key={x._id} user={x}/>)}
                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`}>Add new user</button>
        </>
    );
}