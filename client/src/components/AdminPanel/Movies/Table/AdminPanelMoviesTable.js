import { useContext, useState } from 'react';
import UserContext from '../../../../contexts/UserContext';
import { useModal } from '../../../../hooks/useModal';

import styles from '../../AdminPanelTable.module.css';
import { AdminPanelMoviesRow } from './AdminPanelMoviesRow/AdminPanelMoviesRow';

export function AdminPanelMoviesTable({movies}) {
    const [selectedMovie, setSelectedMovie] = useState({});

    const { user } = useContext(UserContext);

    // const { isModalOpened: isEditOpened, openModal: openEdit, closeModal: closeEdit } = useModal();
    // const { isModalOpened: isDeleteOpened, openModal: openDelete, closeModal: closeDelete } = useModal();
    // const { isModalOpened: isCreateOpened, openModal: openCreate, closeModal: closeCreate } = useModal();


    // async function openModal(modalName, userId) {
    //     try {
    //         const userFromDb = await userService.getUser(userId, user['X-Auth-Token'])

    //         if (modalName === 'Edit') openEdit();
    //         if (modalName === 'Delete') openDelete();

    //         setSelectedUser(userFromDb);
    //     } catch (err) {
    //         toast.error(err.message);
    //     }
    // }
    return (
        <>
                {/* {isEditOpened && <UserEditModal closeHandler={closeEdit} user={selectedUser} />}
                {isDeleteOpened && <UserDeleteModal closeHandler={closeDelete} user={selectedUser} />}
                {isAdminOpened && <UserAdminModal closeHandler={closeAdmin} user={selectedUser} />}
                {isCreateOpened && <UserCreateModal closeHandler={closeCreate} />} */}
                
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
                            />
                        )}

                    </tbody>
                </table>
            </div>

            <button className={`${styles["btn-add"]} ${styles.btn}`} >Add new movie</button>
        </>
    );
}