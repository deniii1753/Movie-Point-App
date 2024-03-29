/*eslint eqeqeq: 0*/
import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserContext from '../../contexts/UserContext';

import { multiSelectStyles } from '../../utils/multiSelectStyles';

import { MovieEditHeader } from './MovieEditHeader/MovieEditHeader';
import { validateField } from '../../utils/validators/movieValidations';

import * as genreService from '../../services/genreService';
import * as movieService from '../../services/movieService';
import { Spinner } from '../Spinner/Spinner';

export function MovieEdit() {
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
    const navigate = useNavigate();
    const { movieId } = useParams();
    const { user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres(data.genres))
            .catch(err => toast.error(err.message));

        movieService.getOne(movieId)
            .then(data => {
                if (user.role !== 'admin') {
                    if (user._id !== data.postCreator) {
                        toast.error('You are not authorized to edit this movie!');
                        navigate('/');
                    }
                }
                setIsLoading(false);
                setFormData({
                    title: { value: data.title, error: null },
                    writer: { value: data.writer, error: null },
                    director: { value: data.director, error: null },
                    genres: { value: data.genres, error: null },
                    time: { value: data.time, error: null },
                    releaseDate: { value: data.releaseDate, error: null },
                    language: { value: data.language, error: null },
                    trailer: { value: data.trailer, error: null },
                    imgUrl: { value: data.imgUrl, error: null },
                    author: { value: data.author, error: null },
                    authorImg: { value: data.authorImg, error: null },
                    description: { value: data.description, error: null },
                })
            })
            .catch(err => {
                toast.error(err.message);
                navigate('/404');
            });
    }, [movieId, navigate, user._id, user.role]);

    if (isLoading) return <Spinner />

    function submitHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        const updatedData = Object.entries(formData).reduce((acc, x) => {
            const [key, { value }] = x;
            const data = { [key]: value };
            return Object.assign(acc, data);
        }, {});

        movieService.editMovie(movieId, updatedData, user['X-Auth-Token'])
            .then(data => {
                setIsLoading(false);
                toast.success(`You successfully edited ${formData.title.value}!`);
                return navigate(`/movies/${data._id}`)
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message)
            });
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
            genres: { value: selectedOptions, error: validateField('genres', selectedOptions) }
        }));
    }

    return (
        <>
            <MovieEditHeader />

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box movies-container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <h2>Edit Movie</h2>
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
                                        value={formData.genres.value}
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