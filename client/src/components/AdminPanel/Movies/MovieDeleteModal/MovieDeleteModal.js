import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

import mainStyles from '../../Modals.module.css';
import styles from '../../DeleteModal.module.css';

import UserContext from '../../../../contexts/UserContext';
import AdminPanelMoviesContext from '../../../../contexts/AdminPanelMoviesContext';

import * as movieService from '../../../../services/movieService';
import { Spinner } from '../../../Spinner/Spinner';

export function MovieDeleteModal({ closeHandler, movie }) {
    const { user } = useContext(UserContext);
    const { deleteMovie } = useContext(AdminPanelMoviesContext);
    const [isLoading, setIsLoading] = useState(false);

    if(isLoading) return <Spinner />

    function deleteHandler() {
        setIsLoading(true);
        movieService.deleteMovie(movie._id, user['X-Auth-Token'])
            .then(() => {
                setIsLoading(false);
                deleteMovie();
                toast.success(`You successfully deleted ${movie.title} movie!`);
                closeHandler();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message);
            });
    }

    function closeModal(e) {
        if (e.target.className === 'modal') return closeHandler();
    }
    
    return (
        <div className="modal" onClick={closeModal}>
            <div className={styles["alert_box"]}>
                <button className={mainStyles["btn-close"]} onClick={closeHandler} ><AiOutlineClose size={20} /></button>
                <div className={styles["icon"]}>
                    <i className={styles["material-icons"]}><AiOutlineClose /></i>
                </div>
                <header>Confirm</header>

                <p>Are you sure you want to delete <b>{movie.title}</b> movie?</p>

                <div className={styles["btns"]}>
                    <button htmlFor="check" onClick={deleteHandler}>Yes</button>
                    <button htmlFor="check" onClick={closeHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}