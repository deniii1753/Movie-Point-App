const User = require('../models/User');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../../config/settings.json');

exports.register = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = new User({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword,
        bio: user.bio
    });

    return newUser.save();
}

exports.update = async (userId, data) => {
    if(data.hasOwnProperty('password')) {
        data.password = await bcrypt.hash(data.password, saltRounds); 
    }
    return User.findByIdAndUpdate(userId, data, { runValidators: true, new: true }).select('-password');
}