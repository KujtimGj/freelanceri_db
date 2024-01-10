const mongoose = require('mongoose');


const Schema =mongoose.Schema

const trial = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profession:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
})

const Trial = mongoose.model("trial",trial)
module.exports=Trial;