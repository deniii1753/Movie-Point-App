import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styles from '../../../AdminPanelTable.module.css';

export function AdminPanelGenresRow({genre}) {
    return (
        <tr>
            <td>{genre._id}</td>
            <td>{genre.value}</td>
            <td>{genre.label}</td>

            <td className={styles["actions"]}>
                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit"><AiFillEdit size={20} /></button>
                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete"><AiFillDelete size={20} /></button>
            </td>
        </tr>
    )
}