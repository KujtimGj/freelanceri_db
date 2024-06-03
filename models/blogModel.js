const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogs = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    }
}) 


const Blogs = mongoose.model("Blogs",blogs);
module.exports=Blogs