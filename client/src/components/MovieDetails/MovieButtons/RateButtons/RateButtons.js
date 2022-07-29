import { useContext } from 'react';
import { AiFillDislike, AiFillLike, } from 'react-icons/ai';
import { IoMdRemoveCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

import styles from './RateButtons.module.css';

import MovieButtonsContext from '../../../../contexts/MovieButtonsContext';

import * as movieService from '../../../../services/movieService';

export function RateButtons() {
    const { user, rating, changeRate, movie } = useContext(MovieButtonsContext);
    const movieId = movie._id;

    function clickHandler(e) {
        const buttonName = e.currentTarget.textContent.trim();

        if (buttonName === 'Like') {
            movieService.like(movieId, user['X-Auth-Token'])
                .then(data => changeRate({ ...data, isLiked: true, isDisliked: false }))
                .catch(err => toast.error(err.message))
        } else if (buttonName === 'Liked') {
            movieService.removeLike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({ ...data, isLiked: false, isDisliked: false }))
                .catch(err => toast.error(err.message))
        } else if (buttonName === 'Dislike') {
            movieService.dislike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({ ...data, isLiked: false, isDisliked: true }))
                .catch(err => toast.error(err.message))
        } else if (buttonName === 'Disliked') {
            movieService.removeDislike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({ ...data, isLiked: false, isDisliked: false }))
                .catch(err => toast.error(err.message))
        }
    }
    return (
        <div className="rate-buttons">
            {rating.isLiked
                ? <button className={styles["liked-btn"]} onClick={clickHandler}><IoMdRemoveCircle size={20} /> Liked</button>
                : <button className={styles["like-btn"]} onClick={clickHandler}><AiFillLike size={20} /> Like</button>
            }
            {rating.isDisliked
                ? <button className={styles["disliked-btn"]} onClick={clickHandler} ><IoMdRemoveCircle size={20} /> Disliked</button>
                : <button className={styles["dislike-btn"]} onClick={clickHandler}><AiFillDislike size={20} /> Dislike</button>
            }
        </div>
    );
}