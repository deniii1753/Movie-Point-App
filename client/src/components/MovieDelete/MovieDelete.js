import { useContext } from "react";
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import UserContext from "../../contexts/UserContext";
import * as movieService from "../../services/movieService";
import styles from './MovieDelete.module.css';


export function MovieDelete({ closeHandler, movieName, movieId }) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function clickCloseHandler(e) {
        if (e.target.className !== styles.modal) return;
        closeHandler();
    }

    function deleteHandler() {
        movieService.deleteMovie(movieId, user['X-Auth-Token'])
            .then(() => {
                toast.success(`You successfully deleted ${movieName}!`);
                return navigate('/movies', {replace: true})
            })
            .catch(err => toast.error(err.message));
    }
    return (
        <div className={styles.modal} onClick={clickCloseHandler}>
            <div className={styles["modal-confirm"]}>
                <div className={styles["modal-content"]}>
                    <button className={styles["close"]} onClick={closeHandler}><AiFillCloseCircle size={20} /></button>
                    <div className={styles["modal-header"]}>
                        <div className={styles["icon-box"]}>
                            <i className={styles["material-icons"]}><AiOutlineClose /></i>
                        </div>
                        <h4 className={styles["modal-title"]}>Are you sure?</h4>
                    </div>
                    <div className={styles["modal-body"]}>
                        <p>Do you really want to delete this movie? This process cannot be undone.</p>
                    </div>
                    <div className={styles["modal-footer"]}>
                        <button className={`${styles["btn"]} ${styles["btn-info"]}`} onClick={closeHandler}>Cancel</button>
                        <button className={`${styles["btn"]} ${styles["btn-danger"]}`} onClick={deleteHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}