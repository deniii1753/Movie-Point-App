import { AiFillDelete, AiFillEdit, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import styles from '../AdminPanelUsersTable.module.css';

import { getDate } from '../../../utils/getDate';

export function AdminPanelUserRow({ user, openModal }) {

    return (
        <>
            <tr>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{getDate(user._creationDate)}</td>

                <td className={styles["actions"]}>
                    <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit" onClick={() => openModal('Edit', user._id)}><AiFillEdit size={20} /></button>
                    <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete" onClick={() => openModal('Delete', user._id)}><AiFillDelete size={20} /></button>
                    {user.role === 'admin'
                        ? <button className={`${styles["btn"]} ${styles["remove-admin-btn"]}`} title="Remove Admin" onClick={() => openModal('Remove Admin', user._id)}><AiOutlineArrowDown size={30} /></button>
                        : <button className={`${styles["btn"]} ${styles["make-admin-btn"]}`} title="Make Admin" onClick={() => openModal('Make Admin', user._id)}><AiOutlineArrowUp size={30} /></button>
                    }
                </td>
            </tr>
        </>
    )
}