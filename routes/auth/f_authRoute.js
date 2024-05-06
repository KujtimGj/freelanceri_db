const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const passport = require("passport");

const {
  loginFreelancer,
  signupFreelancer,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
  deleteExperience,
  loginFreelancerWithGoogleCallback,
  getFreelancers,
} = require("../../controllers/userController");

router.get("/", getFreelancers);
router.get("/:id", getSingleFreelancer);
router.post("/login", loginFreelancer);
router.post("/signup", signupFreelancer);
router.put("/:id", updateFreelancer);
router.delete("/:id", authMiddleware, deleteFreelancer);
router.delete("/:freelancerId/experiences/:experienceId", deleteExperience);

// Google authentication routes for Freelancers
router.get(
  "/auth/google/freelancer",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/freelancer/callback",
  loginFreelancerWithGoogleCallback
);
module.exports = router;
