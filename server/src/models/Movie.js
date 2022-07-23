const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [2, 'Title should be at least 2 characters long!']
    },
    writer: {
        type: String,
        required: [true, 'Writer is requred!'],
        validate: {
            validator(value) {
                value = value.trim();
                return value.includes(' ');
            },
            message: 'Writer should have first and last name!'
        },
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        validate: {
            validator(value) {
                value = value.trim();
                return value.includes(' ');
            },
            message: 'Director should have first and last name!'
        },
    },
    genres: [{
        type: Schema.Types.ObjectId,
        required: [true, 'Genre is required!'],
        validate: {
            validator(value) {
                return value.length !== 0;
            },
            message: 'There should be at least 1 genre!'
        },
        ref: 'genre'
    }],
    time: {
        type: Number,
        requred: [true, 'Time is required!'],
        min: [0, 'Time should be positive number!']
    },
    releaseDate: {
        type: String,
        required: [true, 'ReleaseDate is required!'],
        match: [/(?:0?[1-9]|1[012])[-/.](?:0?[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2999)\b/, 'Please Enter a valid date!']
    },
    language: {
        type: String,
        required: [true, 'Language is required!'],
        minLength: [5, 'Language should be at least 5 characters long!']
    },
    imgUrl: {
        type: String,
        requred: [true, 'imgUrl is required!'],
        validate: {
            validator(value) {
                value = value.toLowerCase();
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'Image URL should start with http:// or https://'
        },
    },
    trailer: {
        type: String,
        requred: [true, 'Trailer is required!'],
        validate: {
            validator(value) {
                value = value.toLowerCase();
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'Trailer should start with http:// or https://'
        },
    },
    author: {
        type: String,
        required: [true, 'Author name is required!'],
        validate: {
            validator(value) {
                value = value.trim();
                return value.includes(' ');
            },
            message: 'Writer should have first and last name!'
        },
    },
    authorImg: {
        type: String,
        required: [true, 'Author image is required!'],
        validate: {
            validator(value) {
                value = value.toLowerCase();
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'Author image should start with http:// or https://'
        },
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [50, 'Description should be at least 50 characters long!'],
        maxLength: [200, 'Description should be less than 200 characters long!']
    },
    _creationDate: {
        type: Number
    },
    postCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'postCreator field is required!']
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