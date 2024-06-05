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
  summarizeFreelancer,
  getFreelancers,
  sumFs,
} = require("../../controllers/userController");
router.get("/summarizeall", sumFs);
router.get("/", getFreelancers);
router.get("/:id", getSingleFreelancer);
router.get("/summarize/:id", summarizeFreelancer);
router.post("/login", loginFreelancer);
router.post("/signup", signupFreelancer);
router.patch("/:id", updateFreelancer);
router.delete("/:id", authMiddleware, deleteFreelancer);
router.delete("/:freelancerId/experiences/:experienceId", deleteExperience);

// // Google authentication routes for Freelancers
// router.get(
//   "/auth/google/freelancer",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/auth/google/freelancer/callback",
//   loginFreelancerWithGoogleCallback
// );
module.exports = router;
