import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiMoviePlay } from 'react-icons/bi';


import './Movies.css';
import styles from './Movies.module.css';

import { MoviesHeader } from "./MoviesHeader/MoviesHeader";
import { MovieItem } from '../MovieItem/MovieItem';

import * as genreService from '../../services/genreService';
import * as movieService from '../../services/movieService';

const MOVIES_PER_REQUEST = 16;

const selectStyles = {
    option: (provided) => ({
        ...provided,
        color: 'black'
    }),
    menu: (provided) => ({
        ...provided,
        width: 'max-content'
    })
}

export function Movies() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            genreService.getAll(),
            movieService.getMovies(0, MOVIES_PER_REQUEST)
        ])
            .then(([genres, movies]) => {
                setGenres([{label: 'All', value: 'all'}, ...genres]);
                setMovies(movies);
            })
            .catch(err => {
                toast.error(err.message);
                navigate('/500');
            })

    }, [navigate]);

    function genreChangeHandler(genre) {
        movieService.getMoviesByGenre(0, MOVIES_PER_REQUEST, genre._id)
            .then(data => {
                setMovies(data);
                setSelectedGenre(genre);
            })
            .catch(err => {
                toast.error(err.message);
                navigate('/500');
            })
    }

    function loadNextMovies() {
        if (movies.length === 0) return;

        if (selectedGenre) {
            movieService.getMoviesByGenre(movies.length, MOVIES_PER_REQUEST, selectedGenre._id)
                .then(data => setMovies(state => [...state, ...data]));
        } else {
            movieService.getMovies(movies.length, MOVIES_PER_REQUEST)
                .then(data => setMovies(state => [...state, ...data]));
        }
    }
    return (
        <>
            <MoviesHeader />

            <section className="portfolio-area pt-60">
                <div className="container movies-container">
                    <div className="row flexbox-center">
                        <div className="col-lg-6 text-center text-lg-left">
                            <div className="section-title">
                                <h1><BiMoviePlay className="movies-list-header-image" /> {selectedGenre?.label || 'All'} Movies</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="portfolio-menu">

                                <div className={styles["genre-select"]}>
                                    <span className={styles["genre-label"]}>Genre: </span>

                                    <Select
                                        options={genres}
                                        onChange={genreChangeHandler}
                                        menuPortalTarget={document.body}
                                        styles={selectStyles}
                                    />

                                </div>

                                {/* <span>Sort  by:</span>
                                <ul className={styles["sort-by-ul"]}>
                                    <li className={movies.sortBy === 'Latest Added' ? 'active' : undefined} onClick={sortClickHandler}>Latest Added</li>
                                    <li className={movies.sortBy === 'Release Date' ? 'active' : undefined} onClick={sortClickHandler}>Release Date</li>
                                    <li className={movies.sortBy === 'Rating' ? 'active' : undefined} onClick={sortClickHandler}>Rating</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <hr />
                    {!movies.length && <h3 className="no-added-movies">No movies found!</h3>}
                    <InfiniteScroll
                        dataLength={movies.length}
                        next={loadNextMovies}
                        hasMore={true}
                        className='row portfolio-item'
                    >
                        {movies.map(x => <MovieItem key={x._id} movie={x} />)}
                    </InfiniteScroll>

                </div>
            </section>
        </>
    );
}