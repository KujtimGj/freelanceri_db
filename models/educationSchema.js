const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new mongoose.Schema({
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
  titull: { type: String, required: true },
  uni: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
