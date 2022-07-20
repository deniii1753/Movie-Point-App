const Movie = require('../models/Movie');

exports.getMovies = (sort, limit, skip) => {
    // this should return only likes, dislikes, imgUrl, title and id
    return Movie.find()
    .skip(skip)
    .sort(sort)
    .limit(limit);
}

// Should make detailed movie endpoint

exports.getMoviesCount = () => {
    return Movie.countDocuments()
}
