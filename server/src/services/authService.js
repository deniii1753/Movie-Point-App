const User = require('../models/User');

exports.register = (user) => {
    const newUser = new User({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        bio: user.bio
    });

    return newUser.save();
}

exports.update = (userId, data) => {
    return User.findByIdAndUpdate(userId, data, {runValidators: true, new: true});
}