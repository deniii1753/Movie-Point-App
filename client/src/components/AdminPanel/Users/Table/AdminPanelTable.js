import { AiFillEdit, AiFillDelete, AiOutlineArrowUp } from 'react-icons/ai';
import styles from './AdminPanelTable.module.css';

export function AdminPanelUsersTable() {
    return (
        <>
            <div className={styles["table-wrapper"]}>

                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>62dd9d4820755e16cb061fcf</td>
                            <td>Peter</td>
                            <td>Johnson</td>
                            <td>peter@abv.bg</td>
                            <td>0812345678</td>
                            <td>June 28, 2022</td>

                            <td className={styles["actions"]}>
                                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit"><AiFillEdit size={20} /></button>
                                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete"><AiFillDelete size={20} /></button>
                                <button className={`${styles["btn"]} ${styles["admin-btn"]}`} title="Make Admin"><AiOutlineArrowUp size={30} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`}>Add new user</button>
        </>
    );
}