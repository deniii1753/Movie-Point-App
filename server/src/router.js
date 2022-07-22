const router = require('express').Router();

const movieController = require('./controllers/movieController');
const genreController = require('./controllers/genreController');
const authController = require('./controllers/authController');


router.use('/movies', movieController);
router.use('/genre', genreController);

module.exports = router;