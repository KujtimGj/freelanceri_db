const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const passport = require("passport");

//controller functions
const {
  loginBusiness,
  signupBusiness,
  getBusinesses,
  getSingleBusiness,
  updateBusiness,
  deleteBusiness,
  loginBusinessWithGoogleCallback,
  summarizeBusiness
} = require("../../controllers/userController");

//BUSINESS
router.get("/", getBusinesses);
router.get("/:id", getSingleBusiness);
router.post("/login", loginBusiness);
router.post("/signup", signupBusiness);
router.put("/:id", authMiddleware, updateBusiness);
router.delete("/:id", authMiddleware, deleteBusiness);
router.get("/summary/:id",summarizeBusiness);

router.get(
  "/auth/google/business",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/auth/google/business/callback", loginBusinessWithGoogleCallback);

module.exports = router;
