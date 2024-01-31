const mongoose = require('mongoose');


const Schema =mongoose.Schema


const educationSchema = new mongoose.Schema({
  institution: String,
  title: String,
});

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
});

const socialSchema = new mongoose.Schema({
  linkedIn:{
    type:String
  },
  instagram:{
    type:String
  },
  facebook:{
    type:String
  }
})


const trial = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    enum: ["Freelancer", "Employer"],
    required: true,
  },
  jobTitle: [{
    type: String,
    required: function () {
      return this.userType == "Freelancer";
    },
  }],
  education: [educationSchema],
  experience: [experienceSchema],
  companyName: {
    type: String,
  },
  phone: {
    type: Number,
    required: function () {
      return this.userType == "Employer";
    },
  },
  sektori: {
    type: String,
    required: function () {
      return this.userType == "Employer";
    },
  },
  website: {
    type: String,
    required: function () {
      return this.userType == "Employer";
    },
  },
  socials: {
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
});


const Trial = mongoose.model("trial",trial)
module.exports=Trial;