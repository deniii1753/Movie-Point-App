const router = require('express').Router();

const movieService = require('../services/movieService');
const userService = require('../services/userService');


const { isAuth } = require('../middlewares/authMiddleware');


router.get('/', async (req, res, next) => {
    const limit = req?.query?.limit || 8;
    const skip = req?.query?.skip || 0;
    const sort = req?.query?.sort;
    const order = req?.query?.order;

    const sortCriteria = {};

    if (sort && order) sortCriteria[sort] = order;

    try {
        const [movies, moviesCount] = await Promise.all([
            movieService.getMovies(sortCriteria, limit, skip),
            movieService.getMoviesCount()
        ]);

        res.status(200).json({ movies, moviesCount });
    } catch (err) {
        next(err);
    }
});

router.get('/count', async (req, res, next) => {
    try {
        const moviesCount = await movieService.getMoviesCount();

        res.status(200).json({ moviesCount });
    } catch (err) {
        next(err);
    }
});

router.get('/:movieId', async (req, res, next) => {
    const populateGenres = req.query?.genres || false;
    const populateGenresDetailed = req.query?.detailedGenres || false;

    try {

        const movie = await movieService.getOne(req.params.movieId, populateGenres, populateGenresDetailed);

        if (!movie) throw { status: 404, message: 'Movie not found!' };

        res.status(200).json(movie);
    } catch (err) {
        next(err);
    }
});

router.post('/', isAuth, async (req, res, next) => {
    try {
        const movie = await movieService.addMovie(req.body);
        await userService.addMovie(req.verifiedUserId, movie._id);

        res.status(201).json(movie);
    } catch (err) {
        next(err);
    }
});

router.put('/:movieId', isAuth, async (req, res, next) => {

    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (req.verifiedUserId != movie.postCreator) throw { status: 401, message: 'You are not authorized to edit this movie!' };

        const updatedMovie = await movieService.updateMovie(movie._id, req.body);
        res.status(200).json(updatedMovie);
    } catch (err) {
        next(err);
    }
});

router.delete('/:movieId', isAuth, async (req, res, next) => {

    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (req.verifiedUserId != movie.postCreator) throw { status: 401, message: 'You are not authorized to delete this movie!' };

        await Promise.all([
            movieService.deleteMovie(movie._id),
            userService.deleteMovie(req.verifiedUserId, movie._id)
        ]);
        res.status(204).json({});
    } catch (err) {
        next(err);
    }
});

router.post('/:movieId/like', isAuth, async (req, res, next) => {

    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (req.verifiedUserId == movie.postCreator) throw { status: 400, message: 'You cannot like your own movie!' };
        if (movie.likes.includes(req.verifiedUserId)) throw { status: 400, message: 'You already liked this movie!' };
        const userDislikeIndex = movie.dislikes.indexOf(req.verifiedUserId);
        if(userDislikeIndex !== -1) movie.dislikes.splice(userDislikeIndex, userDislikeIndex + 1);

        movie.likes.push(req.verifiedUserId);
        await movieService.saveMovie(movie);
        res.status(201).json({});
    } catch (err) {
        next(err);
    }
});

router.post('/:movieId/dislike', isAuth, async (req, res, next) => {

    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (req.verifiedUserId == movie.postCreator) throw { status: 400, message: 'You cannot dislike your own movie!' };
        if (movie.dislikes.includes(req.verifiedUserId)) throw { status: 400, message: 'You already disliked this movie!' };
        const userLikeIndex = movie.likes.indexOf(req.verifiedUserId);
        if(userLikeIndex !== -1) movie.likes.splice(userLikeIndex, userLikeIndex + 1);
        
        movie.dislikes.push(req.verifiedUserId);
        await movieService.saveMovie(movie);
        res.status(201).json({});
    } catch (err) {
        next(err);
    }
});

router.delete('/:movieId/like', isAuth, async (req, res, next) => {
    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (!movie.likes.includes(req.verifiedUserId)) throw { status: 400, message: 'You have not liked this movie!' };
        const userLikeIndex = movie.likes.indexOf(req.verifiedUserId);
        if(userLikeIndex !== -1) movie.likes.splice(userLikeIndex, userLikeIndex + 1);

        await movieService.saveMovie(movie);
        res.status(204).json({});
    } catch (err) {
        next(err);
    }
});

router.delete('/:movieId/dislike', isAuth, async (req, res, next) => {
    try {
        const movie = await movieService.getOne(req.params.movieId);

        if (!movie) throw { status: 404, message: 'Movie not found!' };
        if (!movie.dislikes.includes(req.verifiedUserId)) throw { status: 400, message: 'You have not disliked this movie!' };
        const userLikeIndex = movie.dislikes.indexOf(req.verifiedUserId);
        if(userLikeIndex !== -1) movie.dislikes.splice(userLikeIndex, userLikeIndex + 1);

        await movieService.saveMovie(movie);
        res.status(204).json({});
    } catch (err) {
        next(err);
    }
});

module.exports = router;