const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");

const ratingSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    reqiured: true,
  },
  freelancerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Freelancer",
    required:true
  }
});

const businessSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
  },
  phone: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
  },
  rating: [ratingSchema],
  overallRating:{
    type:Number
  }
});


businessSchema.statics.signupBusiness = async function (
  firstName,
  lastName,
  email,
  password,
  city,
  companyName,
  companyType,
  role,
  phone,
  website,
  rating,
) {
  //validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !city ||
    !companyName ||
    !companyType ||
    !role ||
    !phone
  ) {
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

  const business = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
    city,
    companyName,
    companyType,
    role,
    phone,
    website,
    rating,
  });

  return business;
};

// static user login method
businessSchema.statics.loginBusiness = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const business = await this.findOne({ email });

  if (!business) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, business.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return business;
};

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
