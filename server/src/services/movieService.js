const Movie = require('../models/Movie');

exports.getMovies = (search, sort, limit, skip) => {
    const searchObject = {};

    if (search.key === 'genres' || search.key === 'postCreator') {
        searchObject[search.key] = search.value;
    } else if (search.key) {
        searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' };
    }

    return Movie.find(searchObject)
        .skip(skip)
        .sort({ ...sort, _id: 1 })
        .select('title likes dislikes imgUrl _creationDate description author authorImg postCreator _ratingStars')
        .limit(limit);
}

exports.getCount = (search) => {
    const searchObject = {};

    if (search.key === 'genres' || search.key === 'postCreator') {
        searchObject[search.key] = search.value;
    } else if(search.key) {
        searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' };
    }

    return Movie.find(searchObject).count();
}

exports.getMoviesCount = () => {
    return Movie.count();
}

exports.getOne = (movieId, populateGenres, populateGenresDetailed) => {
    if (populateGenresDetailed) return Movie.findById(movieId).populate('genres');
    if (populateGenres) return Movie.findById(movieId).populate('genres', '-movies');
    return Movie.findById(movieId);
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
        _ratingStars: 0,
        _creationDate: new Date().getTime()
    });

    return newMovie.save();
}

exports.updateMovie = (movieId, updatedData) => {
    return Movie.findOneAndUpdate({ _id: movieId }, updatedData, {new: true});
}

exports.deleteMovie = (movieId) => {
    return Movie.findOneAndDelete({ _id: movieId });
}

exports.saveMovie = (movie) => {
    return movie.save();
}