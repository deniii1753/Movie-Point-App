const User = require('../models/User');

exports.getUsers = (search, limit, skip) => {
    const searchObject = {};

    if(search.key === '_id') {
        searchObject._id = search.value;
    } else {
        search.key ? searchObject[search.key] = {$regex: `${search.value}`, $options: 'i'} : {};
    }

    return User.find(searchObject)
    .skip(skip)
    .select('username firstName lastName email role _creationDate')
    .limit(limit)
    
}

exports.getUser = (userId) => {
    return User.findOne({_id: userId}).select('-password');
}

exports.getUsername = (username) => {
    return User.findOne({ username: { $regex: `${username}$`, $options: 'i' } }).select('username');
}

exports.update = async (userId, newData) => {
    if(newData.hasOwnProperty('password')) {
        newData.password = await bcrypt.hash(newData.password, saltRounds); 
    }
    return User.findByIdAndUpdate(userId, newData, { runValidators: true, new: true }).select('-password');
}

exports.addMovie = (userId, movieId) => {
    return User.updateOne({ _id: userId }, { $push: { createdMovies: movieId } });
}

exports.deleteMovie = (userId, movieId) => {
    return User.updateOne({ _id: userId }, { $pull: { createdMovies: movieId } });
}