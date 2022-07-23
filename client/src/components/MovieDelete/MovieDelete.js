import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import styles from './MovieDelete.module.css';

export function MovieDelete() {
    console.log('DELETE');
    return (
        <div className={styles.modal}>
            <div className={styles["modal-confirm"]}>
                <div className={styles["modal-content"]}>
                        <button className={styles["close"]} ><AiFillCloseCircle size={20} /></button>
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
                        <button className={`${styles["btn"]} ${styles["btn-info"]}`}>Cancel</button>
                        <button className={`${styles["btn"]} ${styles["btn-danger"]}`}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}