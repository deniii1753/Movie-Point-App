import { useEffect, useState } from 'react';
import Select from 'react-select';

import styles from './Movies.module.css';

import { MoviesHeader } from "./MoviesHeader/MoviesHeader";
import { MovieItem } from './MovieItem/MovieItem';

import * as genreService from '../../services/genreService';
import * as movieService from '../../services/movieService';

const MOVIES_PER_REQUEST = 8;

const selectStyles = {
    option: (provided) => ({
        ...provided,
        color: 'black'
    })
}

export function Movies() {
    const [options, setOptions] = useState([]);
    const [movies, setMovies] = useState({
        movies: [],
        currentMoviesCount: 0
    });

    useEffect(() => {
        genreService.getAll()
            .then(data => setOptions(data.genres))
        
        movieService.getMovies(0, MOVIES_PER_REQUEST)
            .then(data => setMovies({
                movies: data.movies,
                currentMoviesCount: MOVIES_PER_REQUEST
            }));
    }, []);

    function changeHandler(option) {
        console.log(option);
    }

    return (
        <>
            <MoviesHeader />

            <section className="portfolio-area pt-60">
                <div className="container movies-container">
                    <div className="row flexbox-center">
                        <div className="col-lg-6 text-center text-lg-left">
                            <div className="section-title">
                                <h1><i className="icofont icofont-movie"></i> Spotlight This Month</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="portfolio-menu">

                                <div className={styles["genre-select"]}>
                                    <span className={styles["genre-label"]}>Genre: </span>

                                    <Select
                                        options={options}
                                        onChange={changeHandler}
                                        menuPortalTarget={document.body}
                                        styles={selectStyles}
                                    />
                                    
                                </div>

                                <span>Sort  by:</span>
                                <ul className={styles["sort-by-ul"]}>
                                    <li>Release Date</li>
                                    <li>Rating</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row portfolio-item">

                        {movies.movies.map(x => <MovieItem key={x._id} movie={x}/>)}
                        
                    </div>

                </div>
            </section>
        </>
    );
}