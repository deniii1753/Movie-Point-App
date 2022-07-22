const User = require('../models/User');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../../config/settings.json');
const defaultProfilePicture = 'https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg'
exports.register = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = new User({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword,
        imgUrl: user.imgUrl || defaultProfilePicture,
        bio: user.bio
    });

    return newUser.save();
}

exports.login = async ({username, password}) => {
    const user = await User.findOne({username});
    if(!user) throw {status: 400, message: 'Wrong username or password!'};

    const result = await bcrypt.compare(password, user.password);

    if(!result) throw {status: 400, message: 'Wrong username or password!'}

    return user;
}

exports.update = async (userId, data) => {
    if(data.hasOwnProperty('password')) {
        data.password = await bcrypt.hash(data.password, saltRounds); 
    }
    return User.findByIdAndUpdate(userId, data, { runValidators: true, new: true }).select('-password');
}