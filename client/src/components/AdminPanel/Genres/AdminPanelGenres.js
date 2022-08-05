import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../../contexts/UserContext";
import * as genreService from "../../../services/genreService";

import styles from '../AdminPanel.module.css';

import { AdminPanelGenresHeader } from "./Header/AdminPanelGenresHeader";
import { AdminPanelGenresPagination } from "./Pagination/AdminPanelGenresPagination";
import { AdminPanelGenresTable } from "./Table/AdminPanelGenresTable";

const GENRES_PER_PAGE = 5;

export function AdminPanelGenres() {
    const [genres, setGenres] = useState({
        genres: [],
        currentPage: 1
    });
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const { user } = useContext(UserContext);

    useEffect(() => {
        const pageNumber = searchParams.get('page') || 1;

        const id = searchParams.get('id');
        const value = searchParams.get('value');

        if (id || value) {
            const arr = [{ id }, { value }];

            const search = arr.find(x => Object.values(x)[0] !== null);
            const kvp = Object.entries(search)[0];

            genreService.getGenresBySearch(kvp[0], kvp[1], (pageNumber - 1) * GENRES_PER_PAGE, GENRES_PER_PAGE, user['X-Auth-Token'])
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

    }, [searchParams, user]);

    return (
        <div className={styles["admin-panel-wrapper"]}>

            <main className={styles["main"]}>

                <section className={`${styles.card} ${styles["main-container"]}`}>
                    <AdminPanelGenresHeader />

                    <AdminPanelGenresTable genres={genres.genres} />

                    <AdminPanelGenresPagination
                        totalPages={totalPages}
                        currentPage={Number(genres.currentPage)}
                    />
                </section>

            </main>
        </div>
    )
}