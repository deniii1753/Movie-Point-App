import { Link } from "react-router-dom";
import { BsStarFill, BsStar } from "react-icons/bs";


export function HomeHeaderMovie({ movie }) {

    return (
        <section className="hero-area" id="home">
            <div className="container">
                <div className="hero-area-slider">
                    <div className="row hero-area-slide">
                        <div className="col-lg-6 col-md-5">
                            <div className="hero-area-content">
                                <img src={movie?.imgUrl}
                                    alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="hero-area-content pr-50">
                                <h2>{movie?.title}</h2>
                                <div className="review">
                                    <div className="author-review">
                                        {movie?._ratingStars > 0 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                        {movie?._ratingStars > 1 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                        {movie?._ratingStars > 2 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                        {movie?._ratingStars > 3 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                        {movie?._ratingStars > 4 ? <BsStarFill size={18} /> : <BsStar size={18} />}
                                    </div>
                                    <h4>{movie?.likes?.length + movie?.dislikes?.length} voters</h4>
                                </div>
                                <p>{movie?.description}</p>
                                <h3>Author:</h3>
                                <div className="slide-cast">
                                    <div className="single-slide-cast">
                                        <img src={movie?.authorImg}
                                            alt="about" />
                                        <span className="author">{movie?.author}</span>
                                    </div>
                                </div>
                                <div className="slide-trailor">
                                    <h3>Movie Details:</h3>
                                    <Link to={`/movies/${movie?._id}`} className="theme-btn">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}