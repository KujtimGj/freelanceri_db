const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
});

const educationSchema = new mongoose.Schema({
  institution: String,
  title: String,
});

const socialSchema = new mongoose.Schema({
  linkedIn: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
});

const client = new Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
});

const freelancerSchema = new Schema({
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
  profession: [
    {
      type: String,
      required: true,
    },
  ],
  skills: {
    type: Array,
  },
  socials: [socialSchema],
  education: [educationSchema],
  experiences: [experienceSchema],
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  clients: [client],
  bio: {
    type: String,
    maxlength: [100, "Maximum 100 words allowed"],
  },
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
  //validation
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
