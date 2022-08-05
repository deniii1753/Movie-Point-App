import { useContext, useState } from "react";
import { toast } from "react-toastify";

import styles from '../../AdminPanelTable.module.css';

import UserContext from "../../../../contexts/UserContext";


import { useModal } from "../../../../hooks/useModal";
import { AdminPanelGenresRow } from "./AdminPanelGenresRow/AdminPanelGenresRow";

import * as genreService from "../../../../services/genreService";

import { GenreEditModal } from "../GenreEditModal/GenreEditModal";

export function AdminPanelGenresTable({ genres }) {
    const [selectedGenre, setSelectedGenre] = useState({});

    const { isModalOpened: isEditOpened, openModal: openEdit, closeModal: closeEdit } = useModal();
    const { isModalOpened: isDeleteOpened, openModal: openDelete, closeModal: closeDelete } = useModal();
    const { isModalOpened: isCreateOpened, openModal: openCreate, closeModal: closeCreate } = useModal();

    async function openModal(modalName, genreId) {
        try {
            const genre = await genreService.getOne(genreId);
            
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
            {/* {isDeleteOpened && <UserDeleteModal closeHandler={closeDelete} user={selectedUser} />} */}
            {/* {isCreateOpened && <UserCreateModal closeHandler={closeCreate} />} */}

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