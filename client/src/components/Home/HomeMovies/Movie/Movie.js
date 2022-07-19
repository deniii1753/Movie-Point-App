import { Link } from 'react-router-dom';

export function Movie({movie}) {
    return (
        <div className="col-md-3">
            <div className="single-portfolio">
                <div className="single-portfolio-img">
                    <img src={movie.imageUrl} alt="portfolio" />

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
                        {/* TODO: Logic for stars */}
                            <i className="icofont icofont-star"></i>
                            <i className="icofont icofont-star"></i>
                            <i className="icofont icofont-star"></i>
                            <i className="icofont icofont-star"></i>
                            <i className="icofont icofont-star"></i>
                        </div>
                        <h4>{movie.likes.length + movie.disLikes.length} voters</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}