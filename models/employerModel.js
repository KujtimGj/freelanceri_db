const mongoose = require('mongoose');
const Schema = mongoose.Schema

const employerSchema = new Schema({
    id:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    isIndividual:{
        type:Bool,
        required:true
    }
})

module.exports=mongoose.model('Employer',employerSchema)  