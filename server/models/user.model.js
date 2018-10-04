var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email : {type : String,unique : true, lowercase : true},
    name : String,
    password : String,
    picture : String,
    // isSeller : {type : Boolean, default : false},
    isSeller : {type : Boolean},
    address : {
        addr1 : String,
        addr2 : String,
        city : String,
        state : String,
        country : String,
        postalCode : String
    },
    created : {type : Date,default : Date.now}
})


module.exports = mongoose.model('User',userSchema);
