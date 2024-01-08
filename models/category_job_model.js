const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoryJob = new Schema({
    category:{type:String,required:true,unique:true},
    categoryID:{type:Number,required:true,unique:true}
})

const CategoryJob = mongoose.model('categoryJob',categoryJob)
module.exports=CategoryJob