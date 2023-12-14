const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adminSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        required:true
    },
    // user:{
    //     user:user,
    //     ref:'User'
    // }
})

module.exports=mongoose.model('Admin',adminSchema)  