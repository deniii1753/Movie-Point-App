const router = require('express').Router();

const movieController = require('./controllers/movieController');
const genreController = require('./controllers/genreController');


router.use('/movies', movieController);
router.use('/genre', genreController);

module.exports = router;