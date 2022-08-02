const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');

const userService = require('../services/userService');

const { checkUsernameAvailability, editPasswordValidator: patchPasswordValidator } = require('../utils/validations');

router.get('/', isAuth, async (req, res, next) => {
    const limit = req.query?.limit || 8;
    const skip = req.query?.skip || 0;

    const firstName = req.query?.firstName;
    const lastName = req.query?.lastName;
    const username = req.query?.username;
    const email = req.query?.email;
    const id = req.query?.id;

    const search = {};
    if(firstName) {
        search.key = 'firstName';
        search.value = firstName;
    } else if (lastName) {
        search.key = 'lastName';
        search.value = lastName;
    } else if(email) {
        search.key = 'email';
        search.value = email;
    } else if(id) {
        search.key = '_id';
        search.value = id;
    } else if(username) {
        search.key = 'username';
        search.value = username;
    }

    try {
        const users = await userService.getUsers(search, limit, skip);

        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

router.get('/:userId', isAuth, async (req, res, next) => {
    if (req.verifieduserRole !== 'admin') {
        if (req.verifiedUserId !== req.params.userId) throw { status: 401, message: 'You are not authorized to view this data!' };
    }

    try {
        const user = await userService.getUser(req.verifiedUserId);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

router.put('/:userId', isAuth, async (req, res, next) => {
    if (req.verifiedUserRole !== 'admin') {
        if (req.verifiedUserId != req.params.userId) return next({ status: 401, message: 'You are not authorized to change this data!' });
    }

    try {
        if (req.body.hasOwnProperty('role')) throw { status: 401, message: 'You cannot modify your role!' };
        if (req.body.hasOwnProperty('_creationDate')) throw { status: 401, message: 'You cannot modify creation date!' };
        if (req.body.hasOwnProperty('username')) await checkUsernameAvailability(req.body.data.username);
        if (req.body.hasOwnProperty('password')) patchPasswordValidator(req.body.data.password, req.body.data.rePassword);

        const user = await userService.update(req.params.userId, req.body);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;