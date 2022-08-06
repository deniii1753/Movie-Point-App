import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import styles from '../AdminPanel.module.css';

import { AdminPanelGenresHeader } from "./Header/AdminPanelGenresHeader";
import { AdminPanelGenresPagination } from "./Pagination/AdminPanelGenresPagination";
import { AdminPanelGenresTable } from "./Table/AdminPanelGenresTable";

import * as genreService from "../../../services/genreService";
import AdminPanelGenresContext from "../../../contexts/AdminPanelGenreContext";

const GENRES_PER_PAGE = 5;

export function AdminPanelGenres() {
    const [genres, setGenres] = useState({
        genres: [],
        currentPage: 1
    });
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const pageNumber = searchParams.get('page') || 1;

        const id = searchParams.get('id');
        const value = searchParams.get('value');

        if (id || value) {
            const arr = [{ id }, { value }];

            const search = arr.find(x => Object.values(x)[0] !== null);
            const kvp = Object.entries(search)[0];

            genreService.getGenresBySearch(kvp[0], kvp[1], (pageNumber - 1) * GENRES_PER_PAGE, GENRES_PER_PAGE)
                .then(data => {
                    setGenres({ genres: data.genres, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / GENRES_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        } else {
            genreService.getAll((pageNumber - 1) * GENRES_PER_PAGE, GENRES_PER_PAGE)
                .then(data => {
                    setGenres({ genres: data.genres, currentPage: pageNumber });
                    setTotalPages(Math.ceil(data.count / GENRES_PER_PAGE));
                })
                .catch(err => toast.error(err.message));
        }

    }, [searchParams]);

    function editGenre(updatedGenre) {
        setGenres(state => ({ ...state, genres: state.genres.map(x => x._id === updatedGenre._id ? updatedGenre : x) }))
    }

    function addNewGenre(newGenre) {
        if (genres.genres.length < GENRES_PER_PAGE) return setGenres(state => ({ ...state, genres: [...state.genres, newGenre] }));

        genreService.getCount()
            .then(data => {
                const pages = Math.ceil(data.totalGenres / GENRES_PER_PAGE);
                if (pages !== totalPages) setTotalPages(pages);
            });
    }

    function deleteGenre(genreId) {
        if (genres.genres.length === 1) {
            if (genres.currentPage === 1) return;
            return setSearchParams(`?page=${genres.currentPage - 1}`);
        }

        setGenres(state => ({ ...state, genres: state.genres.filter(x => x._id !== genreId) }));
    }

    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["main-container"]}`}>
                    <AdminPanelGenresHeader />

                    <AdminPanelGenresContext.Provider value={{ editGenre, addNewGenre, deleteGenre }}>
                        <AdminPanelGenresTable genres={genres.genres} />
                    </AdminPanelGenresContext.Provider>

                    <AdminPanelGenresPagination
                        totalPages={totalPages}
                        currentPage={Number(genres.currentPage)}
                    />
                </section>

            </main>
        </div>
    )
}