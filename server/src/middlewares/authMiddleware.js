const jwt = require('jsonwebtoken');
const {secret} = require('../../config/settings.json');

exports.isAuth = (req, res, next) => {
    const authToken = req.headers['x-auth-token'];

    if(authToken) {
        jwt.verify(authToken, secret, (err, decodedData) => {
            if(err) {
                return next({status: 400, message:'You are not authenticated!'});
            }

            req.verifiedUserId = decodedData._id;
            req.verifiedUserRole = decodedData.role;
            next();
        });
    } else {
        return next({status: 400, message:'You are not authenticated!'});
    }
}