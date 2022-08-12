import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

import { AiFillFileImage, AiFillInfoCircle, AiOutlineClose, AiFillVideoCamera } from "react-icons/ai";
import { GiDualityMask } from 'react-icons/gi';
import { IoTimeSharp } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { FaUser, FaTicketAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

import styles from '../../Modals.module.css';

import UserContext from "../../../../contexts/UserContext";
import AdminPanelMoviesContext from "../../../../contexts/AdminPanelMoviesContext";

import { validateField } from "../../../../utils/validators/movieValidations";
import { checkIfUserExists } from "../utils/checkIfUserExist";
import { selectStyles } from "../utils/selectStyles";

import * as genreService from "../../../../services/genreService";
import * as movieService from "../../../../services/movieService";
import { Spinner } from "../../../Spinner/Spinner";

export function MovieCreateModal({ closeHandler }) {

    const [formData, setFormData] = useState({
        title: { value: '', error: null },
        writer: { value: '', error: null },
        director: { value: '', error: null },
        time: { value: '', error: null },
        genres: { value: [], error: null },
        imgUrl: { value: '', error: null },
        releaseDate: { value: '', error: null },
        language: { value: '', error: null },
        author: { value: '', error: null },
        authorImg: { value: '', error: null },
        trailer: { value: '', error: null },
        description: { value: '', error: null },
        postCreator: { value: '', error: null, focused: true }
    });
    const [isLoading, setIsLoading] = useState(false);
    const [genres, setGenres] = useState([]);
    const { user } = useContext(UserContext);
    const { addNewMovie } = useContext(AdminPanelMoviesContext);
    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres(data.genres))
            .catch(err => toast.error(err.message));
    }, []);

    if(isLoading) return <Spinner />
    
    function changeHandler(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const errorMessage = validateField(e.target.name, e.target.value);

        if (fieldName === 'postCreator') {
            setFormData(state => ({
                ...state,
                [fieldName]: { value: fieldValue, error: errorMessage === undefined ? state[fieldName].error : errorMessage, focused: true }
            }));
        } else {
            setFormData(state => ({
                ...state,
                [fieldName]: { value: fieldValue, error: errorMessage === undefined ? state[fieldName].error : errorMessage }
            }));
        }

    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        const entries = Object.entries(formData).map(x => [x[0], x[1].value]);
        movieService.addMovie(Object.fromEntries(entries), user['X-Auth-Token'])
            .then(data => {
                setIsLoading(false);
                addNewMovie(data);
                toast.success(`You successfully created ${data.title} movie!`);
                closeHandler();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message);
            });
    }

    function multiSelectHandler(selectedOptions) {
        setFormData(state => ({
            ...state,
            genres: { value: selectedOptions, error: validateField('genres', selectedOptions) }
        }));
    }

    function closeModal(e) {
        e.preventDefault();

        closeHandler();
    }

    function checkForUser() {
        if (formData.postCreator.value) {
            checkIfUserExists(formData.postCreator.value, user['X-Auth-Token'])
                .then(doesExist => {
                    if (doesExist) {
                        setFormData(state => ({ ...state, postCreator: { value: state.postCreator.value, error: null, focused: false } }))
                    } else {
                        setFormData(state => ({ ...state, postCreator: { value: state.postCreator.value, error: 'User with this ID doesn\'t exist!', focused: false } }))
                    }
                })
        }
    }

    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]} onClick={closeHandler} />
            <div className={styles["modal"]}>
                <div className={styles["user-container"]}>
                    <header className={styles["headers"]}>
                        <h2>Create Movies</h2>
                        <button className={styles["btn-close"]} onClick={closeHandler}><AiOutlineClose size={20} /></button>
                    </header>
                    <form>
                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="title">Title</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaTicketAlt size={22} /></span>
                                    <input id="title" name="title" type="text" value={formData.title.value} onChange={changeHandler} />
                                </div>
                                {formData.title.error && <p className={styles["form-error"]}>❌{formData.title.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="writer">Writer</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={22} /></span>
                                    <input id="writer" name="writer" type="text" value={formData.writer.value} onChange={changeHandler} />
                                </div>
                                {formData.writer.error && <p className={styles["form-error"]}>❌{formData.writer.error}</p>}
                            </div>
                        </div>

                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="director">Director</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={25} /></span>
                                    <input id="director" name="director" type="text" value={formData.director.value} onChange={changeHandler} />
                                </div>
                                {formData.director.error && <p className={styles["form-error"]}>❌{formData.director.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="time">Time</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><IoTimeSharp size={23} /></span>
                                    <input id="time" name="time" type="number" value={formData.time.value} onChange={changeHandler} />
                                </div>
                                {formData.time.error && <p className={styles["form-error"]}>❌{formData.time.error}</p>}
                            </div>
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="imgUrl">Image Url</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillFileImage size={25} /></span>
                                <input id="imgUrl" name="imgUrl" type="text" value={formData.imgUrl.value} onChange={changeHandler} />
                            </div>
                            {formData.imgUrl.error && <p className={styles["form-error"]}>❌{formData.imgUrl.error}</p>}
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="genres">Genres</label>
                            <div className={styles["input-wrapper"]}>
                                <span><GiDualityMask size={25} /></span>
                                <Select
                                    name="genres"
                                    options={genres}
                                    value={formData.genres.value}
                                    onChange={multiSelectHandler}
                                    placeholder={''}
                                    styles={selectStyles}
                                    isMulti
                                />
                            </div>
                            {formData.genres.error && <p className={styles["form-error"]}>❌{formData.genres.error}</p>}
                        </div>

                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="releaseDate">Release Date</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><BsFillCalendarDateFill size={25} /></span>
                                    <input id="releaseDate" name="releaseDate" type="releaseDate" value={formData.releaseDate.value} onChange={changeHandler} />
                                </div>
                                {formData.releaseDate.error && <p className={styles["form-error"]}>❌{formData.releaseDate.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="language">Language</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><MdLanguage size={25} /></span>
                                    <input id="language" name="language" type="text" value={formData.language.value} onChange={changeHandler} />
                                </div>
                                {formData.language.error && <p className={styles["form-error"]}>❌{formData.language.error}</p>}
                            </div>
                        </div>

                        <div className={styles["form-row"]}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="author">Author</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><FaUser size={25} /></span>
                                    <input id="author" name="author" type="author" value={formData.author.value} onChange={changeHandler} />
                                </div>
                                {formData.author.error && <p className={styles["form-error"]}>❌{formData.author.error}</p>}
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="authorImg">Author Image</label>
                                <div className={styles["input-wrapper"]}>
                                    <span><AiFillFileImage size={25} /></span>
                                    <input id="authorImg" name="authorImg" type="text" value={formData.authorImg.value} onChange={changeHandler} />
                                </div>
                                {formData.authorImg.error && <p className={styles["form-error"]}>❌{formData.authorImg.error}</p>}
                            </div>
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="trailer">Trailer</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillVideoCamera size={25} /></span>
                                <input id="trailer" name="trailer" type="text" value={formData.trailer.value} onChange={changeHandler} />
                            </div>
                            {formData.trailer.error && <p className={styles["form-error"]}>❌{formData.trailer.error}</p>}
                        </div>


                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="description">Description</label>
                            <div className={styles["input-wrapper"]}>
                                <span><AiFillInfoCircle size={25} /></span>
                                <textarea id="description" name="description" value={formData.description.value} onChange={changeHandler} />
                            </div>
                            {formData.description.error && <p className={styles["form-error"]}>❌{formData.description.error}</p>}
                        </div>

                        <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
                            <label htmlFor="postCreator">Owner Id</label>
                            <div className={styles["input-wrapper"]}>
                                <span><FaUser size={25} /></span>
                                <input
                                    id="postCreator"
                                    name="postCreator"
                                    type="text"
                                    value={formData.postCreator.value}
                                    onChange={changeHandler}
                                    onBlur={checkForUser}
                                />
                            </div>
                            {formData.postCreator.error && <p className={styles["form-error"]}>❌{formData.postCreator.error}</p>}
                        </div>
                        <div className={styles["form-actions"]}>
                            <button
                                className={styles["action-save"]}
                                onClick={submitHandler}
                                disabled={Object.values(formData).some(x => x.error || x.value.length === 0 || x.focused)}
                            >
                                Create
                            </button>
                            <button className={styles["action-cancel"]} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}