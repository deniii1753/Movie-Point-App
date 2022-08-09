
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import styles from '../../../AdminPanelTable.module.css';

import { getDate } from "../../../utils/getDate";

export function AdminPanelMoviesRow({ movie, openModal }) {

    return (
        <tr>
            <td>{movie._id}</td>
            <td>{movie.title}</td>
            <td>{movie.author}</td>
            <td>{movie.postCreator}</td>
            <td>{getDate(movie._creationDate)}</td>

            <td className={styles["actions"]}>
                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit" onClick={openModal.bind(null, 'Edit', movie._id)}><AiFillEdit size={20} /></button>
                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete" onClick={openModal.bind(null, 'Delete', movie._id)}><AiFillDelete size={20} /></button>
            </td>
        </tr>
    );
}