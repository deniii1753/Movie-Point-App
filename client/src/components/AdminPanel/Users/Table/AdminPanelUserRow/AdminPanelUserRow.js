import { AiFillDelete, AiFillEdit, AiOutlineArrowUp } from 'react-icons/ai';

import styles from '../AdminPanelUsersTable.module.css';

import { getDate } from '../../../utils/getDate';

export function AdminPanelUserRow({user}) {
    return (
        <tr>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{getDate(user._creationDate)}</td>

            <td className={styles["actions"]}>
                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit"><AiFillEdit size={20} /></button>
                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete"><AiFillDelete size={20} /></button>
                <button className={`${styles["btn"]} ${styles["admin-btn"]}`} title="Make Admin"><AiOutlineArrowUp size={30} /></button>
            </td>
        </tr>
    )
}