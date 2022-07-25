import { useContext } from 'react';
import { AiFillDislike, AiFillLike, } from 'react-icons/ai';
import { IoMdRemoveCircle } from 'react-icons/io';
import UserContext from '../../../contexts/UserContext';

import styles from './RateButtons.module.css';

import * as movieService from '../../../services/movieService';

export function RateButtons({ rate, changeRate, movieId }) {
    const { user } = useContext(UserContext);

    function clickHandler(e) {
        const buttonName = e.currentTarget.textContent.trim();

        //TODO: Show notification in case of error
        if (buttonName === 'Like') {
            movieService.like(movieId, user['X-Auth-Token'])
                .then(data => changeRate({...data, isLiked: true, isDisliked: false}))
        } else if (buttonName === 'Remove Like') {
            movieService.removeLike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({...data, isLiked: false, isDisliked: false}));
        } else if (buttonName === 'Dislike') {
            movieService.dislike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({...data, isLiked: false, isDisliked: true}));
        } else if (buttonName === 'Remove Dislike') {
            movieService.removeDislike(movieId, user['X-Auth-Token'])
                .then(data => changeRate({...data, isLiked: false, isDisliked: false}));
        }
    }

    return (
        <>
            {rate.isLiked
                ? <button className={styles["like-btn"]} onClick={clickHandler}><IoMdRemoveCircle size={20} /> Remove Like</button>
                : <button className={styles["like-btn"]} onClick={clickHandler}><AiFillLike size={20} /> Like</button>
            }
            {rate.isDisliked
                ? <button className={styles["dislike-btn"]} onClick={clickHandler}><IoMdRemoveCircle size={20} /> Remove Dislike</button>
                : <button className={styles["dislike-btn"]} onClick={clickHandler}><AiFillDislike size={20} /> Dislike</button>
            }
        </>
    );
}