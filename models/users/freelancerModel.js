const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
  titull: { type: String, required: true }, // Assuming "titull" corresponds to "title"
  cmp: { type: String, required: true }, // Assuming "cmp" corresponds to "company"
  startDate: { type: Date, required: true }, // Using Date type for start date
  endDate: { type: Date, required: true }, // Using Date type for end date
});

const educationSchema = new mongoose.Schema({
  titull: { type: String, required: true }, // Assuming "titull" corresponds to "title"
  uni: { type: String, required: true }, // Assuming "uni" corresponds to "institution"
  startDate: { type: Date, required: true }, // Using Date type for start date
  endDate: { type: Date, required: true }, // Using Date type for end date
});

const freelancerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  profession: [{ type: String, required: true }],
  skills: [String], // Assuming skills is an array of strings
  socials: {
    linkedIn: String,
    instagram: String,
    facebook: String,
  },
  experiences: [experienceSchema], // Using experienceSchema for experiences array
  education: [educationSchema], // Using educationSchema for education array
});

freelancerSchema.statics.signupFreelancer = async function (
  firstName,
  lastName,
  email,
  password,
  city,
  profession,
  socials,
  skills,
  education,
  experiences
) {
  if (!firstName || !lastName || !email || !password || !city || !profession) {
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
    socials,
    skills,
    education,
    experiences,
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

const Freelancer = mongoose.model("Freelancer", freelancerSchema);
module.exports = Freelancer;
