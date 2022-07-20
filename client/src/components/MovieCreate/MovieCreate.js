import { useEffect, useState } from 'react';
import Select from 'react-select';

import { multiSelectStyles } from './multiSelectStyles';

import * as genreService from '../../services/genreService';
import { MovieCreateHeader } from './MovieCreateHeader/MovieCreateHeader';

export function MovieCreate() {
    const [genres, setGenres] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        writer: '',
        director: '',
        genres: [],
        time: '',
        releaseDate: '',
        languages: '',
        trailer: '',
        imgUrl: '',
        author: '',
        authorImg: '',
        description: '',
    });

    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres(data.genres));
    }, []);

    function submitHandler(e) {
        e.preventDefault();

        console.log(formData);
    }

    function changeHandler(e) {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.name + ' - ' + e.target.value);
    }

    function multiSelectHandler(optionsSelected) {
        setFormData(state => ({
            ...state,
            genres: optionsSelected.map(x => x._id)
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
                                    <label htmlFor="title">Movie Name: </label>
                                    <input type="text" id="title" name="title" value={formData.title} onChange={changeHandler}/>
                                    <label htmlFor="writer">Writer: </label>
                                    <input type="text" id="writer" name="writer" value={formData.writer} onChange={changeHandler}/>
                                    <label htmlFor="director">Director: </label>
                                    <input type="text" id="director" name="director" value={formData.director} onChange={changeHandler}/>
                                    <label htmlFor="genres">Genre: </label>
                                    <Select
                                        name="genres"
                                        options={genres}
                                        onChange={multiSelectHandler}
                                        placeholder={''}
                                        styles={multiSelectStyles}
                                        isMulti
                                    />
                                    <label htmlFor="time">Time: </label>
                                    <input type="Number" id="time" name="time" value={formData.time} onChange={changeHandler}/>
                                    <label htmlFor="releaseDate">Release date: </label>
                                    <input type="text" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={changeHandler}/>
                                    <label htmlFor="languages">Languages: </label>
                                    <input type="text" id="languages" name="languages" value={formData.languages} onChange={changeHandler}/>
                                    <label htmlFor="trailer">Trailer: </label>
                                    <input type="text" id="trailer" name="trailer" value={formData.trailer} onChange={changeHandler}/>
                                    <label htmlFor="imgUrl">Image: </label>
                                    <input type="text" id="imgUrl" name="imgUrl" value={formData.imgUrl} onChange={changeHandler}/>
                                    <label htmlFor="author">Author: </label>
                                    <input type="text" id="author" name="author" value={formData.author} onChange={changeHandler}/>
                                    <label htmlFor="authorImg">Author Image: </label>
                                    <input type="text" id="authorImg" name="authorImg" value={formData.authorImg} onChange={changeHandler}/>
                                    <label htmlFor="description">Description:</label>
                                    <textarea name="description" id="description" className="textarea-container" value={formData.description} onChange={changeHandler} />
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}