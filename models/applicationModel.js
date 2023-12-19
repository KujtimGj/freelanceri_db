const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const applicationSchema = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Posts",
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'Freelancer'
    },
    freelancerPrice:{
        type:Number,
        required:true
    },
    coverLetter:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

const Aplikimi = mongoose.model('applicationSchema',applicationSchema)

module.exports =Aplikimi;