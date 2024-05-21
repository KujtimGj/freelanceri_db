const express = require("express");
const router = express.Router();

const {
  getAllTrials,
  getSingleTrial,
  updateTrial,
  deleteTrial,
  createTrial,
  getEmail,
  sendEmail,
} = require("../controllers/trialController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", getAllTrials);
router.get("/email", getEmail);
router.get("/:id", getSingleTrial);
router.post("/", createTrial);
router.put("/:id", authMiddleware, updateTrial);
// router.delete("/:id", authMiddleware, deleteTrial);
router.post("/sendemail", sendEmail);
module.exports = router;
