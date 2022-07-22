const movieService = require("../services/movieService");

const router = require("express").Router();

router.get('/', async (req, res, next) => {
    const limit = req?.query?.limit || 8;
    const skip = req?.query?.skip || 0;
    const sort = req?.query?.sort;
    const order = req?.query?.order;

    const sortCriteria = {};

    if(sort && order) sortCriteria[sort] = order;

    try {
        const [movies, moviesCount] = await Promise.all([
            movieService.getMovies(sortCriteria, limit, skip),
            movieService.getMoviesCount()
        ]);

        res.status(200).json({movies, moviesCount});
    } catch (err) {
        next(err);
    }
});

router.get('/count', async (req, res, next) => {
    try {
        const moviesCount = await movieService.getMoviesCount();
        res.status(200).json({moviesCount});
    } catch (err) {
        next(err);
    }
});

router.get('/:movieId', async (req, res, next) => {
    try {
        const movie = await movieService.getOne(req.params.movieId);
        res.status(200).json(movie);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const movie = await movieService.addMovie(req.body);
        res.status(201).json({movie});
    } catch(err) {
        next(err);
    }
});

module.exports = router;