const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerProfession = new Schema({
  profId: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profession",
  }],
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Freelancer",
  },
});

const FreelancerProfession = mongoose.model(
  "FreelancerProfession",
  freelancerProfession
);
module.exports = FreelancerProfession;
