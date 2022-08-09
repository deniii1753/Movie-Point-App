import { useState } from 'react';
import { toast } from 'react-toastify';
import { useModal } from '../../../../hooks/useModal';

import styles from '../../AdminPanelTable.module.css';

import { AdminPanelMoviesRow } from './AdminPanelMoviesRow/AdminPanelMoviesRow';
import { MovieCreateModal } from '../MovieCreateModal/MovieCreateModal';
import { MovieEditModal } from '../MovieEditModal/MovieEditModal';

import * as movieService from '../../../../services/movieService';

export function AdminPanelMoviesTable({movies}) {
    const [selectedMovie, setSelectedMovie] = useState({});

    const { isModalOpened: isEditOpened, openModal: openEdit, closeModal: closeEdit } = useModal();
    // const { isModalOpened: isDeleteOpened, openModal: openDelete, closeModal: closeDelete } = useModal();
    const { isModalOpened: isCreateOpened, openModal: openCreate, closeModal: closeCreate } = useModal();


    async function openModal(modalName, movieId) {
        try {
            const movie = await movieService.getOne(movieId)

            if (modalName === 'Edit') openEdit();
            // if (modalName === 'Delete') openDelete();

            setSelectedMovie(movie);
        } catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <>
                {isEditOpened && <MovieEditModal closeHandler={closeEdit} movie={selectedMovie} />}
                {/* {isDeleteOpened && <UserDeleteModal closeHandler={closeDelete} user={selectedUser} />} */}
                {isCreateOpened && <MovieCreateModal closeHandler={closeCreate} />}
                
            <div className={styles["table-wrapper"]}>


                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Movie Creator Id</th>
                            <th>Created On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {movies.map(x =>
                            <AdminPanelMoviesRow
                                key={x._id}
                                movie={x}
                                openModal={openModal}
                            />
                        )}

                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`} onClick={openCreate}>Add new movie</button>
        </>
    );
}