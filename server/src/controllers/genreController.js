const { getGenres } = require("../services/genreService");

const router = require("express").Router();

router.get('/', async (req, res) => {
    try {
        const genres = await getGenres();
        res.status(200).json({genres});
    } catch (err) {
        const statusCode = err.statusCode || 400;
        res.status(statusCode).json({errorMessage: err.message, statusCode})
    }
});

module.exports = router;