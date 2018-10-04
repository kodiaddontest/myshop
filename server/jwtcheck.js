
var jwt = require('jsonwebtoken');
var config = require("./config");
module.exports = function (req, res, next) {
    var token = req.headers['token'];
    console.log('The token is ',token)
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            console.log('decodec block ',decoded)
            if (err) {
                res.json({
                    success: false,
                    message: "Token not verified"
                });
            }
            else {
                console.log('Inside the else block ',decoded)
                req.decoded = decoded;
                next();
            }
        })
    }
    else {
        res.json({
            success: false,
            message: 'Token not found'
        })
    }
}