import styles from './AdminPanel.module.css';

import { AdminPanelHeader } from './Header/AdminPanelHeader';
import { AdminPanelPagination } from './Pagination/AdminPanelPagination';
import { AdminPanelTable } from './Table/AdminPanelTable';

export function AdminPanel() {
    return (
        <div className={styles["admin-panel-wrapper"]}>
            <h1 className={styles["header-text"]}>Admin Panel</h1>
            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["users-container"]}`}>

                    <AdminPanelHeader />
                    
                    <AdminPanelTable />

                    <AdminPanelPagination />
                </section>

            </main>
        </div>
    )
}