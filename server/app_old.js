var express = require("express");
var config = require('./config');
var mongoose = require("mongoose");
var User = require("./models/user.model");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://sonu:sonu123456@ds245762.mlab.com:45762/ecomerp",()=>{
console.log('database connected')
})



var cors = require('cors');
 
var originsWhitelist = [
'http://localhost:4200', //this is front end url
'http://www.xyz.com' //production url
];
var corsOptions = {
origin: function(origin, callback){
var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
callback(null, isWhitelisted);
},
credentials:true
}
app.use(cors());

var route = express.Router();

route.get('/',(req,res)=>{
    res.json({message : "Hello world"})
})

app.use('/api',route);

var authRouting = require('./routings/auth.routing');
app.use('/api/auth',authRouting);

var profileRouting = require('./routings/profile.routing');
app.use('/api/profile',profileRouting);

var categoryRouting = require("./routings/category.routing");
app.use('/api/profile',categoryRouting);

var productRouting = require("./routings/product.routing");
app.use('/api/profile',productRouting);

app.listen(config.port,()=>{
    console.log('Server starts at port '+config.port);
})