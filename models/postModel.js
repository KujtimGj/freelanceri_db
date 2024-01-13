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
    neededWorkers: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    postCategory: {
      type: String,
      required: true,
    },
    postCategoryID: {
      type: String,
      required: true,
    },
    experienceLevel: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model('Posts',postSchema)

module.exports = Posts;
