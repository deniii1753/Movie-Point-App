const Genre = require('../models/Genre');

exports.getGenres = () => {
    return Genre.find({});
}