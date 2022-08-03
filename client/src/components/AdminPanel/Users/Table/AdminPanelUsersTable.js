import styles from './AdminPanelUsersTable.module.css';

import { AdminPanelUserRow } from './AdminPanelUserRow/AdminPanelUserRow';

export function AdminPanelUsersTable({users}) {
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