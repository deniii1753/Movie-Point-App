const { getMovies } = require("../services/movieService");

const router = require("express").Router();

router.get('/', async (req, res) => {
    const limit = req?.query?.limit || 8;
    const sort = req?.query?.sort;
    const order = req?.query?.order;

    const sortCriteria = {};

    if(sort && order) sortCriteria[sort] = order;

    try {
        const movies = await getMovies(sortCriteria, limit);
        res.status(200).json({movies});
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({errorMessage: err.message, statusCode})
    }
});

module.exports = router;