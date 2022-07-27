const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');

const userService = require('../services/userService');

const { checkUsernameAvailability, editPasswordValidator: patchPasswordValidator } = require('../utils/validations');

router.get('/', isAuth, async (req, res, next) => {

    try {
        const user = await userService.getUser(req.verifiedUserId);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

router.put('/', isAuth, async (req, res, next) => {
    if (req.verifiedUserId != req.body._id) return next({ status: 401, message: 'You are not authorized to change this data!' });

    try {
        if (req.body.hasOwnProperty('username')) await checkUsernameAvailability(req.body.data.username);
        if (req.body.hasOwnProperty('password')) patchPasswordValidator(req.body.data.password, req.body.data.rePassword);

        const user = await userService.update(req.body._id, req.body);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;