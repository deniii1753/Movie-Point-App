import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import UserContext from '../../contexts/UserContext';

import styles from './MovieDetails.module.css';

import * as movieService from '../../services/movieService';

import { DetailsHeader } from './DetailsHeader/DetailsHeader';
import { MovieDelete } from "../MovieDelete/MovieDelete";
import { Trailer } from "./Trailer/Trailer";
import { RateButtons } from "./RateButtons/RateButtons";

import { useModal } from "../../hooks/useModal";

export function MovieDetails() {
    const [movie, setMovie] = useState({});
    const [rate, setRate] = useState({});
    const { isModalOpened, openModal, closeModal } = useModal();
    const { movieId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(data => {
                if(data.likes.includes(user?._id)) setRate({isLiked: true, isDisliked: false})
                if(data.dislikes.includes(user?._id)) setRate({isLiked: false, isDisliked: true})
                setMovie(data);
            })
            .catch(() => navigate('/404'));

    }, [movieId, navigate, user?._id]);

    function changeRate(newRate) {
        setRate(newRate);
    }

    return (
        <>

            <DetailsHeader />
            {isModalOpened && <MovieDelete closeHandler={closeModal} creatorId={movie.postCreator} movieId={movieId} />}

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box">
                        <div className="row flexbox-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <div className="transformers-content">
                                    <img src={movie.imgUrl} alt="about" className={styles["details-image"]} />
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
                                        <button className={styles["delete-btn"]} onClick={openModal}><AiFillDelete size={20} /> Delete</button>
                                    </div>
                                    : <RateButtons rate={rate} changeRate={changeRate} movieId={movieId}/>
                                }
                            </div>
                        }
                        <Trailer trailerUrl={movie.trailer} />
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}