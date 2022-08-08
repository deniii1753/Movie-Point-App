
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import styles from '../../../AdminPanelTable.module.css';

import { getDate } from "../../../utils/getDate";

export function AdminPanelMoviesRow({ movie }) {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{movie._id}</td>
            <td>{movie.title}</td>
            <td>{movie.author}</td>
            <td>{movie.postCreator}</td>
            <td>{getDate(movie._creationDate)}</td>

            <td className={styles["actions"]}>
                <button className={`${styles["btn"]} ${styles["edit-btn"]}`} title="Edit" ><AiFillEdit size={20} /></button>
                <button className={`${styles["btn"]} ${styles["delete-btn"]}`} title="Delete" ><AiFillDelete size={20} /></button>
            </td>
        </tr>
    );
}