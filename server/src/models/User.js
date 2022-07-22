const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [5, 'Title should be at least 5 characters long!'],
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
    },
    weight: {
        type: Number
    },
    eyeColor: {
        type: String
    },
    hairColor: {
        type: String
    },
    birthday: {
        type: String
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