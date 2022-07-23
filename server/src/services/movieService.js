const Movie = require('../models/Movie');

exports.getMovies = (sort, limit, skip) => {
    return Movie.find()
    .skip(skip)
    .sort(sort)
    .select('title likes disLikes imgUrl _creationDate description author authorImg')
    .limit(limit);
}

exports.getOne = (movieId, populateGenres, populateGenresDetailed) => {
    if(populateGenresDetailed) return Movie.findById(movieId).populate('genres');
    if(populateGenres) return Movie.findById(movieId).populate('genres', '-movies');
    return Movie.findById(movieId);
}

exports.getMoviesCount = () => {
    return Movie.countDocuments()
}

exports.addMovie = (movie) => {

    const newMovie = new Movie({
        title: movie.title,
        writer: movie.writer,
        director: movie.director,
        genres: movie.genres,
        time: movie.time,
        releaseDate: movie.releaseDate,
        language: movie.language,
        trailer: movie.trailer,
        imgUrl: movie.imgUrl,
        author: movie.author,
        authorImg: movie.authorImg,
        description: movie.description,
        postCreator: movie.postCreator,
        _creationDate: new Date().getTime()
    });
    
    return newMovie.save();
}
