var express = require('express');
var jwtCheck = require('../jwtcheck');
var route = express.Router();
var User = require('../models/user.model');

route.get('/user',jwtCheck,(req,res,next)=>{
    console.log("the main data is ",req.decoded)
    User.findOne({_id : req.decoded.user._id},(err,user)=>{
        if(err){
            res.json({
                error : err
            })
        }
        else{

        res.json({
            success : true,
            message : "successfull",
            user : user
        })
    }
    })
})

route.put('/user',jwtCheck,(req,res,next)=>{
    User.update({_id : req.decoded.user._id},req.body,(err,user)=>{
        if(err){
            console.log('The error is ',err);
        }
        else{
            console.log('Record updated')
            res.json({
                success : true,
                message : "User record updated successfully"
            })
        }
    })
})


module.exports = route;