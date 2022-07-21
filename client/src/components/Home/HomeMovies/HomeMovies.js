import { useEffect, useState } from "react";
import * as movieService from "../../../services/movieService";
import { MovieItem } from "../../MovieItem/MovieItem";

export function HomeMovies() {
    const [filteredMovies, setFilteredMovies] = useState({
        movies: [],
        filter: 'Recently Added'
    });

    useEffect(() => {
        movieService.getRecent()
            .then((data) => setFilteredMovies({
                movies: data.movies,
                filter: 'Recently Added'
            }))
            .catch(err => {
                // redirect to server error page
                console.log(err);
            })
    }, []);

    async function clickHandler(e) {
        const filter = e.target.textContent;

        try {
            if (filter === 'Recently Added') {
                movieService.getRecent()
                    .then(data => setFilteredMovies({
                        movies: data.movies,
                        filter: 'Recently Added'
                    }))
            } else if (filter === 'Top 5') {
                movieService.getTopFive()
                    .then(data => {
                        setFilteredMovies({
                            movies: data.movies,
                            filter: 'Top 5'
                        })
                    });
            }

        } catch (err) {
            // redirect to server error page
            console.log(err);
        }
    }

    let rowStyles = 'row ';

    if(filteredMovies.movies.length === 0) {
        rowStyles += 'no-added-movies';
    }

    return (
        <section className="portfolio-area pt-60">
            <div className="container movies-container">
                <div className="row flexbox-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="section-title">
                            <h1><i className="icofont icofont-movie"></i>{filteredMovies.filter}</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="portfolio-menu">
                            <ul>
                                <li className={filteredMovies.filter === 'Recently Added' ? 'active' : undefined} onClick={clickHandler}>Recently Added</li>
                                <li className={filteredMovies.filter === 'Top 5' ? 'active' : undefined} onClick={clickHandler}>Top 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={rowStyles}>
                    {!filteredMovies.movies.length && <h3>No movies added yet!</h3>}
                    {filteredMovies.movies.map(x => <MovieItem key={x._id} movie={x} />)}
                </div>
            </div>
        </section>
    );
}