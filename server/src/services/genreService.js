const Genre = require('../models/Genre');

exports.getGenres = () => {
    // this should return only value and label
    return Genre.find({});
}

                // details endpoint
// should make detailed ganre which return the array of all movies with specific genre