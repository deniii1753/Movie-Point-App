import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillDislike, AiFillLike, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import UserContext from '../../contexts/UserContext';

import styles from './MovieDetails.module.css';

import * as movieService from '../../services/movieService';

import { DetailsHeader } from './DetailsHeader/DetailsHeader';
import { MovieDelete } from "../MovieDelete/MovieDelete";
import { Trailer } from "./Trailer/Trailer";

export function MovieDetails() {
    const [movie, setMovie] = useState({});
    const [isOpenedDelete, setisOpenedDelete] = useState(false);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(data => setMovie(data))
            .catch(() => navigate('/404'));

    }, [movieId, navigate]);

    function openModal(e) {
        e.preventDefault();
        setisOpenedDelete(true);
    }

    function closeHandler() {
        setisOpenedDelete(false);
    }
    return (
        <>

            <DetailsHeader />
            {isOpenedDelete && <MovieDelete closeHandler={closeHandler} creatorId={movie.postCreator} movieId={movieId}/>}

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box">
                        <div className="row flexbox-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <div className="transformers-content">
                                    <img src={movie.imgUrl} alt="about" className="details-image" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="transformers-content">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.genres?.map(x => x.label).join(' | ')}</p>
                                    <ul>
                                        <li>
                                            <div className="transformers-left">
                                                Author:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.author}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Writer:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.writer}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Director:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.director}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Time:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.time}m
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Release:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.releaseDate}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Language:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.language}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {user &&
                            <div className="movie-details-buttons">
                                {user._id === movie.postCreator
                                    ? <div className="movie-owner-buttons">
                                        <Link to={`/movies/${movie._id}/edit`} className={styles["edit-btn"]}><AiFillEdit size={20} /> Edit</Link>
                                        <a href="/delete" className={styles["delete-btn"]} onClick={openModal}><AiFillDelete size={20} /> Delete</a>
                                    </div>
                                    : <div className="movie-rate-buttons">
                                        <a href="/" className={styles["like-btn"]}><AiFillLike size={20} /> Like</a>
                                        <a href="/" className={styles["dislike-btn"]}><AiFillDislike size={20} /> Dislike</a>
                                    </div>
                                }
                            </div>
                        }
                        <Trailer trailerUrl={movie.trailer}/>
                    </div>
                </div>
            </section>

            <section className="details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="details-content">
                                <div className="details-overview">
                                    <h2>Overview</h2>
                                    <p>{movie.description}</p>
                                </div>
                                {/* <div className="details-reply">
                                    <h2>Leave a Reply</h2>
                                    <form action="/">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="select-container">
                                                    <input type="text" placeholder="Name" />
                                                    <i className="icofont icofont-ui-user"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="select-container">
                                                    <input type="text" placeholder="Email" />
                                                    <i className="icofont icofont-envelope"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="select-container">
                                                    <input type="text" placeholder="Phone" />
                                                    <i className="icofont icofont-phone"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="textarea-container">
                                                    <textarea placeholder="Type Here Message"></textarea>
                                                    <button><i className="icofont icofont-send-mail"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="details-comment">
                                    <a className="theme-btn theme-btn2" href="/">Post Comment</a>
                                    <p>You may use these HTML tags and attributes: You may use these HTML tags and attributes: You may use these HTML tags and attributes: </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}