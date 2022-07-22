const User = require('../models/User');

exports.getUsername = (username) => {
    return User.findOne({username: {$regex: `${username}$`, $options: 'i'}}).select('username');
}