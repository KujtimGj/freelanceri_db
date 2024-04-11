const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Contact = Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    businessName:{
        type:String
    }
     
});

const ContactUs = mongoose.model("Contact",Contact);
module.exports=ContactUs