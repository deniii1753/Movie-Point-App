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
        match: [/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Please Enter a valid date!']
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
                return value.startsWith('https://www.youtube.com') || value.startsWith('www.youtube.com') || value.startsWith('https://youtube.com');
            },
            message: 'Trailer should be valid youtube link!'
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
        maxLength: [500, 'Description should be less than 500 characters long!']
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