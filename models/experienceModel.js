const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
  titull: { type: String, required: true },
  cmp: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
