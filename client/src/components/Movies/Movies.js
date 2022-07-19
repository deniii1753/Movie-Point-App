import { useEffect, useState } from 'react';
import Select from 'react-select';

import styles from './Movies.module.css';

import { MoviesHeader } from "./MoviesHeader/MoviesHeader";
import * as genreService from '../../services/genreService';

export function Movies() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        genreService.getAll()
            .then(data => setOptions(data.genres))
    }, []);

    const selectStyles = {
        option: (provided) => ({
            ...provided,
            color: 'black'
        })
    }

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
                                    <li className="active">Release Date</li>
                                    <li>Rating</li>
                                    <li>

                                        {/* <select onChange={changeHandler} className={styles['genre-select']}>
                                            <option disabled selected hidden>Genre</option>
                                            <option>Action</option>
                                            <option>Comedy</option>
                                            <option>Horror</option>
                                            <option>Triller</option>
                                            <option>Adventure</option>
                                        </select> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row portfolio-item">
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="single-portfolio">
                                <div className="single-portfolio-img">
                                    <img src="/img/portfolio/portfolio6.png" alt="portfolio" />
                                    <a href="https://www.youtube.com/watch?v=RZXnugbhw_4" className="popup-youtube">
                                        <span>Details</span>
                                    </a>
                                </div>
                                <div className="portfolio-content">
                                    <h2>Last Hero</h2>
                                    <div className="review">
                                        <div className="author-review">
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                            <i className="icofont icofont-star"></i>
                                        </div>
                                        <h4>180k voters</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}