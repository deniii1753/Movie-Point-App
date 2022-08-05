import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styles from '../../../AdminPanelTable.module.css';

export function AdminPanelGenresRow({genre, openModal}) {
    return (
        <tr>
            <td>{genre._id}</td>
            <td>{genre.value}</td>
            <td>{genre.label}</td>

            <td className={styles["actions"]}>
                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit" onClick={() => openModal('Edit', genre._id)}><AiFillEdit size={20} /></button>
                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete" onClick={() => openModal('Delete', genre._id)}><AiFillDelete size={20} /></button>
            </td>
        </tr>
    )
}