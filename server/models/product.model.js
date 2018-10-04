var mongoose = require("mongoose");
var Schema = mongoose.Schema ;
var productSchema = new Schema({
    category : {type : Schema.Types.ObjectId,ref : 'Category'},
    owner : {type : Schema.Types.ObjectId,ref : 'User'},
    image : String,
    title : String,
    description : String,
    price : Number,
    created : {type : Date,default : Date.now}
})

module.exports = mongoose.model('Product',productSchema);