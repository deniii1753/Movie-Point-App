const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [5, 'Username should be at least 5 characters long!'],
        maxLength: [15, 'Username should be maximum 15 characters long!']
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required!'],
        minLength: [2, 'firstName should be at least 2 characters long!'],
        maxLength: [10, 'firstName should be maximum 10 characters long!']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required!'],
        minLength: [2, 'lastName should be at least 2 characters long!'],
        maxLength: [10, 'lastName should be maximum 10 characters long!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        match: [/^(.+)@(.+)$/, 'Email address is not valid!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password should be at least 5 characters long!'],
    },
    bio: {
        type: String,
        required: [true, 'Bio is required!'],
        minLength: [50, 'Bio should be at least 50 characters long!'],
    },
    height: {
        type: Number,
        min: [50, 'Height cannot be under 50!'],
        max: [250, 'Height cannot be over 250!']
    },
    weight: {
        type: Number,
        min: [20, 'Weight cannot be under 20!'],
        max: [500, 'Weight cannot be over 500!']
    },
    imgUrl: {
        type: String,
        required: [true, 'imgUrl is required!'],
        validate: {
            validator(value) {
                value = value.toLowerCase();
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'Image URL should start with http:// or https://'
        }
    },
    eyeColor: {
        type: String
    },
    hairColor: {
        type: String
    },
    birthday: {
        type: String,
        match: [/(?:0?[1-9]|1[012])[-/.](?:0?[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2999)\b/, 'Please Enter a valid date!']
    },
    language: {
        type: String
    },
    hobbies: {
        type: Array
    },
    socials: {
        type: Object
    },
    moviesCreate: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }],
    likedMovies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }],
    dislikedMovies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
});

const User = model('user', userSchema);

module.exports = User;