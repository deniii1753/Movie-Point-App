import { useState } from "react";
import { toast } from "react-toastify";

import styles from '../../AdminPanelTable.module.css';


import { useModal } from "../../../../hooks/useModal";
import { AdminPanelGenresRow } from "./AdminPanelGenresRow/AdminPanelGenresRow";

import * as genreService from "../../../../services/genreService";

import { GenreEditModal } from "../GenreEditModal/GenreEditModal";
import { GenreCreateModal } from "../GenreCreateModal/GenreCreateModal";
import { GenreDeleteModal } from "../GenreDeleteModal/GenreDeleteModal";
import { Spinner } from "../../../Spinner/Spinner";

export function AdminPanelGenresTable({ genres }) {
    const [selectedGenre, setSelectedGenre] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { isModalOpened: isEditOpened, openModal: openEdit, closeModal: closeEdit } = useModal();
    const { isModalOpened: isDeleteOpened, openModal: openDelete, closeModal: closeDelete } = useModal();
    const { isModalOpened: isCreateOpened, openModal: openCreate, closeModal: closeCreate } = useModal();
    
    if(isLoading) return <Spinner />

    async function openModal(modalName, genreId) {
        setIsLoading(true);
        try {
            const genre = await genreService.getOne(genreId);
            setIsLoading(false);

            if (modalName === 'Edit') openEdit();
            if (modalName === 'Delete') openDelete();
            
            setSelectedGenre(genre);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <>
            {isEditOpened && <GenreEditModal closeHandler={closeEdit} genre={selectedGenre} />}
            {isCreateOpened && <GenreCreateModal closeHandler={closeCreate} />}
            {isDeleteOpened && <GenreDeleteModal closeHandler={closeDelete} genre={selectedGenre} />}

            <div className={styles["table-wrapper"]}>


                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Value</th>
                            <th>Label</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {genres.map(x =>
                            <AdminPanelGenresRow
                                key={x._id}
                                genre={x}
                                openModal={openModal}
                            />
                        )}

                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`} onClick={openCreate}>Add new genre</button>
        </>
    );
}