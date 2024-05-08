const express = require("express");
const router = express.Router();
const {
  getFFP,
  getFP,
  getFPs,
  createFP,
  updateFP,
  deleteFP,
} = require("../controllers/freelancerProfession");

router.get("/", getFPs);
router.get("/:id", getFP);
router.get("/freelancer/:id", getFFP);
router.post("/", createFP);
router.put("/:id", updateFP);
router.delete("/:id", deleteFP);
module.exports = router;
