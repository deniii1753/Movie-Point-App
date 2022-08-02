import { AdminPanelUsersHeader } from './Header/AdminPanelUsersHeader';
import { AdminPanelUsersTable } from './Table/AdminPanelUsersTable';
import { AdminPanelUsersPagination } from './Pagination/AdminPanelUsersPagination';

import styles from '../AdminPanel.module.css';

export function AdminPanelUsers() {
    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["users-container"]}`}>
                    <AdminPanelUsersHeader />

                    <AdminPanelUsersTable />

                    <AdminPanelUsersPagination />
                </section>

            </main>
        </div>
    );
}