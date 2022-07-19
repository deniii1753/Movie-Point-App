const Movie = require('../models/Movie');

exports.getMovies = (sort, limit, skip) => {
    return Movie.find()
    .skip(skip)
    .sort(sort)
    .limit(limit);
}