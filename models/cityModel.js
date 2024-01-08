const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const city = new Schema({
    city:{type:String,required:true,unique:true},
    cityID:{type:Number,required:true,unique:true}
})

const City = mongoose.model("City",city);
module.exports = City