import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './Movies.module.css';

import { MoviesHeader } from "./MoviesHeader/MoviesHeader";
import { MovieItem } from './MovieItem/MovieItem';

import * as genreService from '../../services/genreService';
import * as movieService from '../../services/movieService';

const MOVIES_PER_REQUEST = 16;

const selectStyles = {
    option: (provided) => ({
        ...provided,
        color: 'black'
    })
}

export function Movies() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState({
        movies: [],
        totalMoviesInDB: null,
        sortBy: ''
    });

    //      TODO:
    // release date filter
    // rating filter
    // genre filter

    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres(data.genres))
            .catch(err => {
                // redirect to server error page
                console.log(err);
            });

        movieService.getMovies(0, MOVIES_PER_REQUEST)
            .then(data => setMovies(state => ({
                ...state, 
                movies: data.movies,
                totalMoviesInDB: data.moviesCount,
            })))
            .catch(err => {
                // redirect to server error page
                console.log(err);
            });
    
    }, []);

    function genreChangeHandler(genre) {
        console.log(genre);
    }

    useEffect(() => {
        setMovies(oldMovies => {
            let newMovies = [...oldMovies.movies];

            if (movies.sortBy === 'Latest Added') {
                newMovies = oldMovies.movies.sort((a, b) => b._creationDate - a._creationDate);
            }

            return {
                ...oldMovies,
                movies: newMovies,
                sortBy: movies.sortBy
            }
        });
    }, [movies.sortBy]);

    function sortClickHandler(e) {
        const sortCriteria = e.target.textContent;

        setMovies(state => ({ ...state, sortBy: sortCriteria }));
    }

    function loadNextMovies() {
        if(movies.movies.length < MOVIES_PER_REQUEST) return;

        movieService.getMovies(movies.movies.length, MOVIES_PER_REQUEST)
            .then(data => setMovies(state => {
                return {
                ...state,
                movies: [...state.movies, ...data.movies],
                sortBy: ''
            }}))
    }
    return (
        <>
            <MoviesHeader />

            <section className="portfolio-area pt-60">
                <div className="container movies-container">
                    <div className="row flexbox-center">
                        <div className="col-lg-6 text-center text-lg-left">
                            <div className="section-title">
                                <h1><i className="icofont icofont-movie"></i> {movies.sortBy || 'All Movies'}</h1>
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

                                <span>Sort  by:</span>
                                <ul className={styles["sort-by-ul"]}>
                                    <li className={movies.sortBy === 'Latest Added' ? 'active' : undefined} onClick={sortClickHandler}>Latest Added</li>
                                    <li className={movies.sortBy === 'Release Date' ? 'active' : undefined} onClick={sortClickHandler}>Release Date</li>
                                    <li className={movies.sortBy === 'Rating' ? 'active' : undefined} onClick={sortClickHandler}>Rating</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                    <InfiniteScroll
                        dataLength={movies.movies.length}
                        next={loadNextMovies}
                        hasMore={true}
                        className='row portfolio-item'
                    >
                        {movies.movies.map(x => <MovieItem key={x._id} movie={x} />)}
                    </InfiniteScroll>

                </div>
            </section>
        </>
    );
}