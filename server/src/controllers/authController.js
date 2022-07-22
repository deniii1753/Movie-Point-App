const authService = require('../services/authService');

const router = require('express').Router();

router.post('/register', async (req, res, next) => {
    try{
        const user = await authService.register(req.body)
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

module.exports = router;