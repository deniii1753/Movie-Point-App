import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import styles from './MovieDetails.module.css';

import * as movieService from '../../services/movieService';

import { DetailsHeader } from './DetailsHeader/DetailsHeader';
import { Trailer } from "./Trailer/Trailer";
import { RateButtons } from "./RateButtons/RateButtons";

import { OwnerButtons } from "./OwnerButtons/OwnerButtons";
import { BsStar, BsStarFill } from "react-icons/bs";

export function MovieDetails() {
    const [movie, setMovie] = useState({
        movie: {},
        rating: {}
    });
    const { movieId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(data => {
                const { _ratingStars, ...rest } = data;
                const isLiked = data.likes.includes(user?._id) ?? false;
                const isDisliked = data.dislikes.includes(user?._id) ?? false;

                setMovie({
                    movie: rest,
                    rating: {
                        likesCount: data.likes.length,
                        dislikesCount: data.dislikes.length,
                        _ratingStars,
                        isLiked,
                        isDisliked
                    }
                })
            })
            .catch(() => navigate('/404'));

    }, [movieId, navigate, user?._id]);



    function changeRate(data) {
        console.log(data);
        setMovie(state => ({
            ...state,
            rating: { ...data }
        }))
    }

    return (
        <>

            <DetailsHeader />

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box">
                        <div className="row flexbox-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <div className="transformers-content">
                                    <img src={movie.movie.imgUrl} alt="about" className={styles["details-image"]} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="transformers-content">
                                    <h2>{movie.movie.title}</h2>
                                    <p>{movie.movie.genres?.map(x => x.label).join(' | ')}</p>
                                    <div className="review">
                                        <div className="author-review">
                                            {movie.rating._ratingStars > 0 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                            {movie.rating._ratingStars > 1 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                            {movie.rating._ratingStars > 2 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                            {movie.rating._ratingStars > 3 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                            {movie.rating._ratingStars > 4 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                        </div>
                                        <h4>{movie.rating.likesCount + movie.rating.dislikesCount} voters</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="transformers-left">
                                                Author:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.author}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Writer:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.writer}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Director:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.director}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Time:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.time}m
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Release:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.releaseDate}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Language:
                                            </div>
                                            <div className="transformers-right">
                                                {movie.movie.language}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Likes:
                                            </div>
                                            <div className={`transformers-right ${styles["rating-box"]}`}>
                                                {movie.rating.likesCount}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="transformers-left">
                                                Dislikes:
                                            </div>
                                            <div className={`transformers-right ${styles["rating-box"]}`}>
                                                {movie.rating.dislikesCount}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {user &&
                            <div className="movie-details-buttons">
                                {user._id === movie.movie.postCreator
                                    ? <OwnerButtons movieId={movieId} postCreator={movie.movie.postCreator} />
                                    : <RateButtons rating={{isLiked: movie.rating.isLiked, isDisliked: movie.rating.isDisliked}} changeRate={changeRate} movieId={movieId} />
                                }
                            </div>
                        }
                        <Trailer trailerUrl={movie.movie.trailer} />
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
                                    <p>{movie.movie.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}