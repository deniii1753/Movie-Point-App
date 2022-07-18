const router = require('express').Router();

router.get('/test', (req, res) => {
    res.json({name: 'test'});
});

module.exports = router;