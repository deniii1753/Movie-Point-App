import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import AdminPanelGenresContext from "../../../../contexts/AdminPanelGenreContext";
import UserContext from "../../../../contexts/UserContext";

import styles from '../../DeleteModal.module.css';
import mainStyles from '../../Modals.module.css';

import * as genreService from "../../../../services/genreService";
import { toast } from "react-toastify";
import { Spinner } from "../../../Spinner/Spinner";

export function GenreDeleteModal({ closeHandler, genre }) {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(UserContext);
    const { deleteGenre } = useContext(AdminPanelGenresContext);

    if(isLoading) return <Spinner />

    function deleteGenreHandler() {
        setIsLoading(true);

        genreService.deleteOne(genre._id, user["X-Auth-Token"])
            .then(() => {
                setIsLoading(false);
                deleteGenre();
                toast.success(`You successfully deleted ${genre.label}!`);
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

                <p>Are you sure you want to delete <b>{genre.label}</b> genre?</p>

                <div className={styles["btns"]}>
                    <button htmlFor="check" onClick={deleteGenreHandler}>Yes</button>
                    <button htmlFor="check" onClick={closeHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}