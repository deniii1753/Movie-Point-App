import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { useModal } from '../../../hooks/useModal';
import styles from './OwnerButtons.module.css';
import { MovieDelete } from '../../MovieDelete/MovieDelete';

export function OwnerButtons({ movieId, postCreator }) {
    const { isModalOpened, openModal, closeModal } = useModal();

    return (
        <>
            {isModalOpened && <MovieDelete closeHandler={closeModal} creatorId={postCreator} movieId={movieId} />}
            
            <Link to={`/movies/${movieId}/edit`} className={styles["edit-btn"]}><AiFillEdit size={20} /> Edit</Link>
            <button className={styles["delete-btn"]} onClick={openModal}><AiFillDelete size={20} /> Delete</button>
        </>
    )
}