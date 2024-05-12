const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applications = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Posts",
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Freelancer",
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Business",
    },
    coverLetter: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ["Accepted", "Rejected", "Under Review", "Deleted", "Contracted"],
    },
  },
  { timestamps: true }
);

const Aplikimi = mongoose.model("applications", applications);

module.exports = Aplikimi;
