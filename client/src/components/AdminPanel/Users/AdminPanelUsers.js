import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from '../AdminPanel.module.css';
import AdminPanelUsersContext from '../../../contexts/AdminPanelUsersContext';

import UserContext from '../../../contexts/UserContext';

import { AdminPanelUsersHeader } from './Header/AdminPanelUsersHeader';
import { AdminPanelUsersTable } from './Table/AdminPanelUsersTable';
import { AdminPanelUsersPagination } from './Pagination/AdminPanelUsersPagination';

import * as userService from '../../../services/userService';

const USERS_PER_PAGE = 2;

export function AdminPanelUsers() {
    const [users, setUsers] = useState({
        users: [],
        currentPage: 1
    });
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const { user } = useContext(UserContext);

    useEffect(() => {
        const pageNumber = searchParams.get('page') || 1;

        const id = searchParams.get('id');
        const username = searchParams.get('username');
        const email = searchParams.get('email');
        const firstName = searchParams.get('firstName');
        const lastName = searchParams.get('lastName');

        if (id || username || email || firstName || lastName) {
            const arr = [{ id }, { username }, { email }, { firstName }, { lastName }];

            const search = arr.find(x => Object.values(x)[0] !== null);
            const [key, value] = Object.entries(search)[0];

            userService.getUsersBySearch(key, value, (pageNumber - 1) * USERS_PER_PAGE, USERS_PER_PAGE, user['X-Auth-Token'])
                .then(data => {
                    setUsers({ users: data.users, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / USERS_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        } else {
            userService.getUsers((pageNumber - 1) * USERS_PER_PAGE, USERS_PER_PAGE, user['X-Auth-Token'])
                .then(data => {
                    setUsers({ users: data.users, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / USERS_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        }

    }, [searchParams, user]);

    function editUser(updatedUser) {
        setUsers(state => ({ ...state, users: state.users.map(x => x._id === updatedUser._id ? updatedUser : x) }))
    }

    function addNewUser(newUser) {
        if (users.users.length < USERS_PER_PAGE) return setUsers(state => ({ ...state, users: [...state.users, newUser] }));

        userService.getUsersCount(user["X-Auth-Token"])
            .then(data => {
                const pages = Math.ceil(data.totalUsers / USERS_PER_PAGE);
                if (pages !== totalPages) setTotalPages(pages);
            });
    }

    function deleteUser() {
        if (users.users.length === 1) {
            if (users.currentPage === 1) return;
            return setSearchParams(`?page=${users.currentPage - 1}`);
        }
        const pageNumber = searchParams.get('page') || 1;

        userService.getUsers((pageNumber - 1) * USERS_PER_PAGE, USERS_PER_PAGE, user['X-Auth-Token'])
        .then(data => {
            setUsers({ users: data.users, currentPage: pageNumber });
            setTotalPages(Math.ceil(data.count / USERS_PER_PAGE));
        })
        .catch(err => toast.error(err.message));
    }

    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["main-container"]}`}>
                    <AdminPanelUsersHeader />

                    <AdminPanelUsersContext.Provider value={{ editUser, addNewUser, deleteUser }} >
                        <AdminPanelUsersTable users={users.users} />
                    </AdminPanelUsersContext.Provider>

                    <AdminPanelUsersPagination
                        totalPages={totalPages}
                        currentPage={Number(users.currentPage)}
                    />
                </section>

            </main>
        </div>
    );
}