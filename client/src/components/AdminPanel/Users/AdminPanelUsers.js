import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../AdminPanel.module.css';

import UserContext from '../../../contexts/UserContext';

import { AdminPanelUsersHeader } from './Header/AdminPanelUsersHeader';
import { AdminPanelUsersTable } from './Table/AdminPanelUsersTable';
import { AdminPanelUsersPagination } from './Pagination/AdminPanelUsersPagination';

import * as userService from '../../../services/userService';

const USERS_PER_PAGE = 5;

export function AdminPanelUsers() {
    const [users, setUsers] = useState({
        users: [],
        currentPage: 1
    });

    const { user } = useContext(UserContext);


    useEffect(() => {
        userService.getUsers(0, USERS_PER_PAGE, user['X-Auth-Token'])
            .then(data => setUsers(state => ({...state, users: data})))
            .catch(err => toast.error(err.message));
    }, [user]);

    function newPageClickHandler(pageNumber) {
        userService.getUsers((pageNumber - 1) * USERS_PER_PAGE, USERS_PER_PAGE, user['X-Auth-Token'])
            .then(data => setUsers({users: data, currentPage: pageNumber}))
            .catch(err => toast.error(err.message));
    }

    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["users-container"]}`}>
                    <AdminPanelUsersHeader />

                    <AdminPanelUsersTable users={users.users} />

                    <AdminPanelUsersPagination
                        loadUsers={newPageClickHandler}
                        authToken={user['X-Auth-Token']}
                        usersPerPage={USERS_PER_PAGE}
                        currentPage={users.currentPage}
                    />
                </section>

            </main>
        </div>
    );
}