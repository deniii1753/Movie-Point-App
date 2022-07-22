const authService = require('../services/authService');
const userService = require('../services/userService')
const router = require('express').Router();

router.post('/register', async (req, res, next) => {
    try{
        await checkUsernameAvailability(req.body.username);

        const user = await authService.register(req.body);

        res.status(201).json(user);
    } catch(err) {
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

async function checkUsernameAvailability(username) {
    const result = await userService.getUsername(username);

    if(result === null) return;

    throw {status: 409, message: 'Username already exist!'};
}

module.exports = router;