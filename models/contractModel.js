const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const milestones = new Schema({
//   description: {
//     type: String,
//     required: true,
//   },
//   deadline: {
//     type: Date,
//     reqiured: true,
//   },
//   sum: {
//     type: Number,
//     required: true,
//   },
// });

const contractSchema = new Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
    required: true,
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts",
    required: true,
  },
  projectType: {
    type: String,
    enum: ["Project Based", "Milestones"],
    required: true,
    default: "Project Based",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectOffer: {
    type: Number,
    required: function () {
      return this.projectType === "Project Based";
    },
  },
  projectDate: {
    type: Date,
    required: function () {
      return this.projectType === "Project Based";
    },
  },
  state:{
    type:String,
    enum:["Active","Finished"],
    required:true
  }
});

const Contract = mongoose.model("Contract", contractSchema);
module.exports = Contract;
