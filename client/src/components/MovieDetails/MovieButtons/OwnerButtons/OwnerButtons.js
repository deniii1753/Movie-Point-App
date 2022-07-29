import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import styles from './OwnerButtons.module.css';

import MovieButtonsContext from '../../../../contexts/MovieButtonsContext';

import { useModal } from '../../../../hooks/useModal';

import { MovieDelete } from '../../../MovieDelete/MovieDelete';

export function OwnerButtons() {
    const { isModalOpened, openModal, closeModal } = useModal();
    const { movie } = useContext(MovieButtonsContext);

    return (
        <>
            {isModalOpened && <MovieDelete closeHandler={closeModal} movieName={movie.title} movieId={movie._id} />}
            <div className="owner-buttons">
                <Link to={`/movies/${movie._id}/edit`} className={styles["edit-btn"]}><AiFillEdit size={20} /> Edit</Link>
                <button className={styles["delete-btn"]} onClick={openModal}><AiFillDelete size={20} /> Delete</button>
            </div>
        </>
    )
}