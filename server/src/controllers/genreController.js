const genreService = require("../services/genreService");

const router = require("express").Router();

router.get('/', async (req, res, next) => {
    const limit = req.query?.limit || 8;
    const skip = req.query?.skip || 0;

    const value = req.query?.value;
    const id = req.query?.id;

    const search = {};

    if (value) {
        search.key = 'value';
        search.value = value;
    } else if (id) {
        search.key = '_id';
        search.value = id;
    }

    try {
        const [genres, count] = await Promise.all([
            genreService.getGenres(search, limit, skip),
            genreService.getCount(search)
        ]);

        res.status(200).json({ count, genres });
    } catch (err) {
        next(err);
    }
});

router.get('/:genreId', async (req, res, next) => {
    try {
        const genre = await genreService.getOne(req.params.genreId);
    } catch (err) {
        next(err);
    }
});

router.get('/count', async (req, res, next) => {
    try {
        const count = await genreService.getTotalCount();

        res.status(200).json({ totalGenres: count });
    } catch (err) {
        next(err);
    }
});


module.exports = router;