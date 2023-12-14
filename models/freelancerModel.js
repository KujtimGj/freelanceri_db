const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const freelancerSchema = new Schema({
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
    profession:{
        type:String,
        required:true
    },
    skills:{
        type:Array,
    },
    education:{
        type:Array,
    },
    experiences:{
        type:Array
    }
})

freelancerSchema.statics.signupFreelancer = async function (
  firstName,
  lastName,
  email,
  password,
  city,
  profession
) {
  //validation
  if (!firstName || !lastName || !email || !password ||!city||!profession) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const freelancer = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
    city,
    profession,
  });

  return freelancer;
};

// static user login method
freelancerSchema.statics.loginFreelancer = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const freelancer = await this.findOne({ email });

  if (!freelancer) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, freelancer.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return freelancer;
};


module.exports=mongoose.model('Freelancer',freelancerSchema)  