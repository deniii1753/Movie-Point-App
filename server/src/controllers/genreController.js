const { getGenres } = require("../services/genreService");

const router = require("express").Router();

router.get('/', async (req, res, next) => {
    try {
        const genres = await getGenres();
        res.status(200).json({genres});
    } catch (err) {
        next(err);
    }
});

module.exports = router;