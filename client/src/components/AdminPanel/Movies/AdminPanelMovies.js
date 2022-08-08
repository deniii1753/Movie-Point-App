import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import styles from '../AdminPanel.module.css';

import AdminPanelMoviesContext from "../../../contexts/AdminPanelMoviesContext";

import { AdminPanelMoviesHeader } from "./Header/AdminPanelMoviesHeader";

import * as movieService from "../../../services/movieService";
import { AdminPanelMoviesTable } from "./Table/AdminPanelMoviesTable";
import { AdminPanelMoviesPagination } from "./Pagination/AdminPanelMoviesPagination";

const MOVIES_PER_PAGE = 5;

export function AdminPanelMovies() {
    const [movies, setMovies] = useState({
        movies: [],
        currentPage: 1
    });
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const pageNumber = searchParams.get('page') || 1;

        const id = searchParams.get('id');
        const title = searchParams.get('title');
        const author = searchParams.get('author');
        const movieCreatorId = searchParams.get('movieCreatorId');

        if (id || title || author || movieCreatorId) {
            const arr = [{ id }, { title }, { author }, { movieCreatorId }];

            const search = arr.find(x => Object.values(x)[0] !== null);
            const [key, value] = Object.entries(search)[0];

            movieService.getMoviesBySearch(key, value, (pageNumber - 1) * MOVIES_PER_PAGE, MOVIES_PER_PAGE)
                .then(data => {
                    setMovies({ movies: data.movies, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / MOVIES_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        } else {
            movieService.getMovies((pageNumber - 1) * MOVIES_PER_PAGE, MOVIES_PER_PAGE)
                .then(data => {
                    setMovies({ movies: data.movies, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / MOVIES_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        }

    }, [searchParams]);

    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["main-container"]}`}>
                    <AdminPanelMoviesHeader />

                    <AdminPanelMoviesContext.Provider value={null}>
                        <AdminPanelMoviesTable movies={movies.movies} />
                    </AdminPanelMoviesContext.Provider>

                    <AdminPanelMoviesPagination
                        totalPages={totalPages}
                        currentPage={Number(movies.currentPage)}
                    />
                </section>

            </main>
        </div>
    );
}