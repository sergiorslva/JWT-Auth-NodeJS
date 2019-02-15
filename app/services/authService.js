var jwt = require('jsonwebtoken');

module.exports.auth = function (req, res, next) {
    var token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }        
        next();
    });
};
