const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homeEmail = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const HomeEmail = mongoose.model("homeEmail", homeEmail);

module.exports = HomeEmail;
