const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Business",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    // city: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "City",
    //   required: true,
    // },
    requirements: {
      type: String,
      required: true,
    },
    profession: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profession",
      required: true,
    },
    experienceLevel: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ["Rejected", "Pending", "Approved", "Expired"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
