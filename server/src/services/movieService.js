const Movie = require('../models/Movie');

exports.getMovies = (sort, limit) => {
    return Movie.find()
    .sort(sort)
    .limit(limit);
}