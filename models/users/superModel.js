const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const superAdminSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

superAdminSchema.statics.signupAdmin = async function (
  fullName,
  email,
  password
) {
  if (!fullName || !email || !password) {
    throw Error("All fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Admin already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const admin = await this.create({
    fullName,
    email,
    password:hash,
  });

  return admin;
};

superAdminSchema.statics.loginAdmin = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const admin = await this.findOne({ email });

  if (!admin) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, admin.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return admin;
};

const SuperAdmin = mongoose.model("superAdminSchema", superAdminSchema);
module.exports = SuperAdmin;
