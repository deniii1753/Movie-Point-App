const User = require('../models/User');

const bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.SALT_ROUNDS;

exports.getUsers = (search, limit, skip) => {
    const searchObject = {};

    if (search.key === '_id') {
        searchObject._id = search.value;
    } else {
        search.key ? searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' } : {};
    }

    return User.find(searchObject)
        .skip(skip)
        .select('username firstName lastName email role _creationDate')
        .limit(limit);
}

exports.getCount = (search) => {
    const searchObject = {};

    if (search.key === '_id') {
        searchObject._id = search.value;
    } else {
        search.key ? searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' } : {};
    }

    return User.find(searchObject).count();
}

exports.getUser = (userId) => {
    return User.findOne({ _id: userId }).select('-password');
}

exports.getUsersCount = () => {
    return User.count()
}

exports.getUsername = (username) => {
    return User.findOne({ username: { $regex: `${username}$`, $options: 'i' } }).select('username');
}

exports.update = async (userId, newData) => {
    if (newData.hasOwnProperty('password')) {
        newData.password = await bcrypt.hash(newData.password, SALT_ROUNDS);
    }
    return User.findByIdAndUpdate(userId, newData, { runValidators: true, new: true }).select('-password');
}

exports.addMovie = (userId, movieId) => {
    return User.updateOne({ _id: userId }, { $push: { createdMovies: movieId } });
}

exports.deleteMovie = (userId, movieId) => {
    return User.updateOne({ _id: userId }, { $pull: { createdMovies: movieId } });
}

exports.deleteUser = (userId) => {
    return User.deleteOne({ _id: userId });
}