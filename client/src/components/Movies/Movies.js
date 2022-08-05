import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
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
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({});
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        genreService.getAll()
            .then(data => setGenres([{ label: 'All', value: 'all' }, ...data.genres]))
            .catch(err => toast.error(err.message));
    }, []);

    function genreChangeHandler(genre) {
        setSearchParams(`?genre=${genre.value}`);
    }

    useEffect(() => {
        if (!genres.length) return;
        const genreValue = searchParams.get('genre');
        const searchValue = searchParams.get('search');
        const genre = genres.find(x => x.value === genreValue);

        if (genreValue) {
            movieService.getMoviesByGenre(0, MOVIES_PER_REQUEST, genre?._id)
                .then(data => {
                    setMovies(data);
                    setSelectedGenre(genre);
                })
                .catch(err => toast.error(err.message));
        } else if (searchValue) {
            movieService.getMoviesByTitle(0, MOVIES_PER_REQUEST, searchValue)
                .then(data => {
                    if (searchValue) {
                        setSearch(searchValue);
                        setSelectedGenre(null);
                    }
                    return setMovies(data);
                })
                .catch(err => toast.error(err.message));
        } else {
            movieService.getMovies(0, MOVIES_PER_REQUEST)
                .then(data => {
                    if (genre) setSelectedGenre(genre);
                    return setMovies(data);
                })
                .catch(err => toast.error(err.message));
        }
    }, [searchParams, genres]);

    function loadNextMovies() {
        if (movies.length < MOVIES_PER_REQUEST) return;

        if (selectedGenre) {
            movieService.getMoviesByGenre(movies.length, MOVIES_PER_REQUEST, selectedGenre._id)
                .then(data => setMovies(state => [...state, ...data]))
                .catch(err => toast.error(err.message));
        } else if (search) {
            movieService.getMoviesByTitle(movies.length, MOVIES_PER_REQUEST, search)
                .then(data => setMovies(state => [...state, ...data]))
                .catch(err => toast.error(err.message));
        } else {
            movieService.getMovies(movies.length, MOVIES_PER_REQUEST)
                .then(data => setMovies(state => [...state, ...data]))
                .catch(err => toast.error(err.message));
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
                                        value={selectedGenre}
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