import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

import styles from '../../Modals.module.css';

import AdminPanelGenresContext from "../../../../contexts/AdminPanelGenreContext";
import UserContext from "../../../../contexts/UserContext";

import * as genreService from "../../../../services/genreService";
import { Spinner } from "../../../Spinner/Spinner";

export function GenreCreateModal({ closeHandler }) {
    const [formData, setFormData] = useState({
        value: '',
        label: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(UserContext);
    const { addNewGenre } = useContext(AdminPanelGenresContext);

    if(isLoading) return <Spinner />

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
        setIsLoading(true);

        genreService.addNew(formData, user["X-Auth-Token"])
            .then(data => {
                setIsLoading(false);
                addNewGenre(data);
                toast.success(`You successfully created new genre ${data.label}`);
                closeHandler();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message);
            });
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
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="label">Label</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="label" name="label" type="text" value={formData.label} onChange={changeHandler} />
                                </div>
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