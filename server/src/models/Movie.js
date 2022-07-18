const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        requred: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    language: {
        type: Array,
        required: true
    },
    imageUrl: {
        type: String,
        requred: true
    },
    trailer: {
        type: String,
        requred: true
    },
    author: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    _creationDate: Number,
    postCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    disLikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Movie = model('movie', movieSchema);

module.exports = Movie;