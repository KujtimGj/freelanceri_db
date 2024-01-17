const mongoose = require('mongoose');


const Schema =mongoose.Schema


// const educationSchema = new mongoose.Schema({
//   institution: String,
//   title: String,
// });

// const experienceSchema = new mongoose.Schema({
//   title: String,
//   company: String,
// });


const trial = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    enum:  ["Freelancer", "Employer" ],
    required: true,
  },
  // freelancerDetails: {
  //   profession: {
  //     type: String,
  //     required: function () {
  //       return this.userType === "Freelancer";
  //     },
  //   },
  //   city: {
  //     type: String,
  //     required: function () {
  //       return this.userType === "Freelancer";
  //     },
  //   },
  //   phone: {
  //     type: Number,
  //     required: function () {
  //       return this.userType === "Freelancer";
  //     },
  //   },
  //   linkedIn:{
  //       type:String,
  //       required:function(){
  //           return this.userType==="Freelancer"
  //       }
  //   },
  //   experience: [experienceSchema],
  //   education:[educationSchema]

  // },
  // employerDetails:{
  //   type:{
  //       type:String,
  //       enum:['Individual',"Company"]
  //   }, 
  //   companyName: {
  //     type: String,
  //     required: function () {
  //       return this.userType === 'Employer' && this.employerDetails.type === 'Company';
  //     }},
  //   phone:{
  //       type:Number,
  //   },
  //   city:{
  //       type:String,
  //   }
    
  // }
});


const Trial = mongoose.model("trial",trial)
module.exports=Trial;