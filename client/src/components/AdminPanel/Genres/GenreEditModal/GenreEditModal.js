import { useContext, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

import styles from '../../Modals.module.css';

import AdminPanelGenresContext from '../../../../contexts/AdminPanelGenreContext';

import UserContext from '../../../../contexts/UserContext';

import * as genreService from '../../../../services/genreService';

export function GenreEditModal({ closeHandler, genre }) {
    const [formData, setFormData] = useState({
        value: '',
        label: ''
    });
    const { user } = useContext(UserContext);
    const { editGenre } = useContext(AdminPanelGenresContext);

    useEffect(() => {
        setFormData({
            value: genre.value,
            label: genre.label,
        });
    }, [genre]);

    function changeHandler(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData(state => ({
            ...state,
            [fieldName]: fieldValue
        }))

    }

    function closeModal(e) {
        e.preventDefault();

        closeHandler();
    }

    function submitHandler(e) {
        e.preventDefault();

        genreService.editOne(genre._id, formData, user["X-Auth-Token"])
            .then(data => {
                editGenre(data);
                toast.success(`You successfully updated ${genre.label}!`);
                closeHandler();
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]} onClick={closeHandler} />
            <div className={styles["modal"]}>
                <div className={styles["user-container"]}>
                    <header className={styles["headers"]}>
                        <h2>Edit Genre</h2>
                        <button className={styles["btn-close"]} onClick={closeHandler}><AiOutlineClose size={20} /></button>
                    </header>
                    <form>
                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="value">Value</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="value" name="value" type="text" value={formData.value} onChange={changeHandler} />
                                </div>
                                {!formData.label && <p className={styles["form-error"]}>❌Label field cannot be empty!</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="label">Label</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="label" name="label" type="text" value={formData.label} onChange={changeHandler} />
                                </div>
                                {!formData.value && <p className={styles["form-error"]}>❌Value field cannot be empty!</p>}
                            </div>
                        </div>

                        <div className={styles["form-actions"]}>
                            <button
                                className={styles["action-save"]}
                                onClick={submitHandler}
                                disabled={Object.values(formData).some(x => x === '')}
                            >
                                Save
                            </button>
                            <button className={styles["action-cancel"]} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}