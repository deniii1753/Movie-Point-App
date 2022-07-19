const {Schema, model} = require('mongoose');

const genreSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
});

const Genre = model('genre', genreSchema);

module.exports = Genre;