import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import { multiSelectStyles } from './multiSelectStyles';

import * as genreService from '../../services/genreService';
import { MovieCreateHeader } from './MovieCreateHeader/MovieCreateHeader';
import { validateField } from '../../utils/validators/createMovieValidations';

import * as movieService from '../../services/movieService';

export function MovieCreate() {
    const [genres, setGenres] = useState([]);
    const [formData, setFormData] = useState({
        title: { value: '', error: null },
        writer: { value: '', error: null },
        director: { value: '', error: null },
        genres: { value: [], error: null },
        time: { value: '', error: null },
        releaseDate: { value: '', error: null },
        language: { value: '', error: null },
        trailer: { value: '', error: null },
        imgUrl: { value: '', error: null },
        author: { value: '', error: null },
        authorImg: { value: '', error: null },
        description: { value: '', error: null },
    });
    const [serverErrorMessage, setServerErrorMessage] = useState(null);
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres(data.genres));
    }, []);

    function submitHandler(e) {
        e.preventDefault();

        const movie = Object.entries(formData).reduce((acc, x) => {
            const [key, {value}] = x;
            const data = {[key]: value};
            return Object.assign(acc, data);
        }, {});

        movie.postCreator = user._id;
        console.log(movie);
        movieService.addMovie(movie, user['X-Auth-Token'])
            .then(data => navigate(`/movies/${data._id}`))
            .catch(err => setServerErrorMessage(err.message));
    }

    function changeHandler(e) {
        setFormData(state => ({
            ...state,
            [e.target.name]: { value: e.target.value, error: validateField(e.target.name, e.target.value) }
        }))
    }

    function multiSelectHandler(selectedOptions) {
        setFormData(state => ({
            ...state,
            genres: { value: selectedOptions.map(x => x._id), error: validateField('genres', selectedOptions) }
        }))
    }
    return (
        <>
            <MovieCreateHeader />

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box movies-container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <h2>Add Movie</h2>
                            </div>

                            <div className="add-movie col-lg-12">
                                <form method="POST" onSubmit={submitHandler}>
                                    <label htmlFor="title">Movie Name*: </label>
                                    <input type="text" id="title" name="title" value={formData.title.value} onChange={changeHandler} />
                                    {formData.title.error && <p className="error-message">❌{formData.title.error}</p>}
                                    <label htmlFor="writer">Writer*: </label>
                                    <input type="text" id="writer" name="writer" value={formData.writer.value} onChange={changeHandler} />
                                    {formData.writer.error && <p className="error-message">❌{formData.writer.error}</p>}
                                    <label htmlFor="director">Director*: </label>
                                    <input type="text" id="director" name="director" value={formData.director.value} onChange={changeHandler} />
                                    {formData.director.error && <p className="error-message">❌{formData.director.error}</p>}
                                    <label htmlFor="genres">Genre*: </label>
                                    <Select
                                        name="genres"
                                        options={genres}
                                        onChange={multiSelectHandler}
                                        placeholder={''}
                                        styles={multiSelectStyles}
                                        isMulti
                                    />
                                    {formData.genres.error && <p className="error-message">❌{formData.genres.error}</p>}
                                    <label htmlFor="time">Time*: </label>
                                    <input type="Number" id="time" name="time" value={formData.time.value} onChange={changeHandler} />
                                    {formData.time.error && <p className="error-message">❌{formData.time.error}</p>}
                                    <label htmlFor="releaseDate">Release date (DD/MM/YYYY)*: </label>
                                    <input type="text" id="releaseDate" name="releaseDate" value={formData.releaseDate.value} onChange={changeHandler} />
                                    {formData.releaseDate.error && <p className="error-message">❌{formData.releaseDate.error}</p>}
                                    <label htmlFor="language">Language*: </label>
                                    <input type="text" id="language" name="language" value={formData.language.value} onChange={changeHandler} />
                                    {formData.language.error && <p className="error-message">❌{formData.language.error}</p>}
                                    <label htmlFor="trailer">Trailer*: </label>
                                    <input type="text" id="trailer" name="trailer" value={formData.trailer.value} onChange={changeHandler} />
                                    {formData.trailer.error && <p className="error-message">❌{formData.trailer.error}</p>}
                                    <label htmlFor="imgUrl">Image*: </label>
                                    <input type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl.value} onChange={changeHandler} />
                                    {formData.imgUrl.error && <p className="error-message">❌{formData.imgUrl.error}</p>}
                                    <label htmlFor="author">Author Name*: </label>
                                    <input type="text" id="author" name="author" value={formData.author.value} onChange={changeHandler} />
                                    {formData.author.error && <p className="error-message">❌{formData.author.error}</p>}
                                    <label htmlFor="authorImg">Author Image*: </label>
                                    <input type="text" id="authorImg" name="authorImg" value={formData.authorImg.value} onChange={changeHandler} />
                                    {formData.authorImg.error && <p className="error-message">❌{formData.authorImg.error}</p>}
                                    <label htmlFor="description">Description*:</label>
                                    <textarea name="description" id="description" className="textarea-container" value={formData.description.value} onChange={changeHandler} />
                                    {formData.description.error && <p className="error-message">❌{formData.description.error}</p>}
                                    {serverErrorMessage && <p className="error-message">❌{serverErrorMessage}</p>}

                                    <button
                                        disabled={
                                            !formData.genres.value.length ||
                                            Object.values(formData).some(x => x.error)
                                        }
                                    >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}