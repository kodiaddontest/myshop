var express = require('express');
var User = require('../models/user.model');
var route = express.Router();
var jwt = require('jsonwebtoken');
var config = require("../config");


route.post('/login', (req, res, next) => {
    console.log(req.body.email + "---" + req.body.password)
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, useri) => {
        console.log('user is ', useri)
        if (err) {
            console.log('The error is ', err)
            res.json({
                success: false,
                message: err
            })
        }
        else {
            console.log('The tken user is ', useri);
            var token = jwt.sign(
                {
                    user: useri
                }, config.secret, {
                    expiresIn: '7d'
                });
            res.json({
                succcess: true,
                message: "Log in successfull",
                token: token
            })
        }

    })
})


route.post('/signup', (req, res, next) => {
    console.log('The request object is ', req.body);
    var user = new User();
    user.email = req.body.email;
    user.name = req.body.name;
    user.password = req.body.password;
    user.picture = req.body.picture;
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            console.log('The error is ', err);
            res.json({
                message: err
            })
            //return next(err)
        }
        if (existingUser) {
            res.json({
                success: false,
                message: "Account with this email already exist"
            })
        }
        else {
            user.save();
            // var token = jwt.sign(user,config.secret,{
            //     expiresIn : '7d'
            // })
            res.json({
                success: true,
                message: "Account created successfully "
            })

        }
    })
})



module.exports = route;