const router = require('express').Router();
const jwt = require('jsonwebtoken');

const authService = require('../services/authService');
const userService = require('../services/userService');

const { passwordValidator } = require('../utils/validations');

const { secret } = require('../../config/settings.json');

router.post('/register', async (req, res, next) => {
    try {
        await checkUsernameAvailability(req.body.username);
        passwordValidator(req.body.password, req.body.rePassword);

        const [user, token] = await Promise.all([
            authService.register(req.body),
            generateAuthToken()
        ]);

        res.status(201).json({ _id: user._id, username: user.username, 'X-Auth-Token': token});
    } catch (err) {
        next(err);
    }
});

router.patch('/updateUser', async (req, res, next) => {
    // check user

    try {
        const user = await authService.update(req.body._id, req.body.data);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }

});

function generateAuthToken() {
    return new Promise((resolve, reject) => {
        jwt.sign({}, secret, {expiresIn: '24h'}, (err, token) => {
                if(err) {
                    return reject({status: 400, message: 'An error occured while generating auth token!'});
                }
                resolve(token);
            });
    });
}

async function checkUsernameAvailability(username) {
    const result = await userService.getUsername(username);

    if (result === null) return;

    throw { status: 409, message: 'Username already exist!' };
}

module.exports = router;