const express = require("express");
const router = express.Router();
const authMiddleware =  require('../../middlewares/authMiddleware')
const passport = require('passport'); 


const {
  loginFreelancer,
  signupFreelancer,
  getFreelancers,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
  loginFreelancerWithGoogleCallback
} = require("../../controllers/userController");


router.get("/", authMiddleware,getFreelancers);
router.get("/:id", authMiddleware,getSingleFreelancer);
router.post('/login',loginFreelancer);
router.post('/signup',signupFreelancer);
router.put("/:id", authMiddleware,updateFreelancer);
router.delete("/:id", authMiddleware,deleteFreelancer);

// Google authentication routes for Freelancers
router.get('/auth/google/freelancer', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/freelancer/callback', loginFreelancerWithGoogleCallback);
module.exports=router