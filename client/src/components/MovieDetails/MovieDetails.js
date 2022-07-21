import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as movieService from '../../services/movieService';

import { DetailsHeader } from "./DetailsHeader/DetailsHeader";
export function MovieDetails() {
    const [movie, setMovie] = useState({});

    const {movieId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(data => setMovie(data))
            .catch(() => navigate('/404'));

    }, [movieId, navigate]);
    return (
        <>

        <DetailsHeader />

            <section className="transformers-area">
                <div className="container">
                    <div className="transformers-box">
                        <div className="row flexbox-center">
                            <div className="col-lg-5 text-lg-left text-center">
                                <div className="transformers-content">
                                    <img src={movie.imgUrl} alt="about" className="details-image"/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="transformers-content">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.genres?.join(' | ')}</p>
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
                        <div>
                            <a href="/" className="like-btn">👍Like</a>
                            <a href="/" className="dislike-btn">👎Dislike</a>
                        </div>
                        <a href={movie.trailer} className="theme-btn popup-youtube">Watch Trailer</a>
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
                                    <p>Humans are at war with the Transformers, and Optimus Prime is gone. The key to saving the future lies buried in the secrets of the past and the hidden history of Transformers on Earth. Now it's up to the unlikely alliance of inventor Cade Yeager, Bumblebee, a n English lord and an Oxford professor to save the world. Transformers: The Last Knight has a deeper mythos and bigger spectacle than its predecessors, yet still ends up being mostly hollow and cacophonous. The first "Transformers" movie that could actually be characterized as badass. Which isn't a bad thing. It may, in fact, be better.</p>
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