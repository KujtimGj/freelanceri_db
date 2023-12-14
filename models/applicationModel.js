const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const applicationSchema=new Schema({
    postuesi:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    postimi:{
        type:mongoose.Schema.Types.ObjectId(),
        required:true,
        ref:'Posts'
    },
    aplikuesi:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true})

const Aplikimi = mongoose.model('applicationSchema',applicationSchema)