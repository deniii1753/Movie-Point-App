import { Link } from 'react-router-dom';
import { BsStarFill, BsStar } from "react-icons/bs";

import './MovieItem.css';

export function MovieItem({ movie }) {
    console.log(movie);
    return (
        <div className="col-md-3">
            <div className="single-portfolio">
                <div className="single-portfolio-img">
                    <img src={movie.imgUrl} alt="portfolio" />

                    <Link
                        to={`/movies/${movie._id}`}
                        className="popup-youtube">
                        <span>Details</span>
                    </Link>

                </div>
                <div className="portfolio-content">
                    <h2>{movie.title}</h2>
                    <div className="review">
                        <div className="author-review">
                            {movie._ratingStars > 0 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                            {movie._ratingStars > 1 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                            {movie._ratingStars > 2 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                            {movie._ratingStars > 3 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                            {movie._ratingStars > 4 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                        </div>
                        <h4>{movie.likes.length + movie.dislikes.length} voters</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}