const {Schema, model} = require('mongoose');

const genreSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const Genre = model('genre', genreSchema);

module.exports = Genre;