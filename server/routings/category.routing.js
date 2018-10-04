var express = require('express');
var route = express.Router();
var Category = require('../models/category.model');

route.post('/categories',(req,res,next)=>{
var category = new Category();
category.name = req.body.name;
category.save();
res.json({
    success : true,
    message : "category created succesfully"
})
})

route.delete('/categories/:id',(req,res)=>{
    category.delete({_id : req.params.id},(err,category)=>{
    res.json({
        success : true,
        message : "Category deleted successfuly !"
    })
    })
})

route.get('/categories',(req,res,next)=>{
Category.find({},(err,categories)=>{
if(err){
    res.json({
        success : false,
        message : err
    })
}
else{
    res.json({
        success : true,
        categories : categories
    })
}
})
})


module.exports = route;