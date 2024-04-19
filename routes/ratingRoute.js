const express = require("express");
const router = express.Router();
const {
  getRating,
  getRatings,
  createRating,
  updateRating,
  deleteRating,
  getBusinessRating,
  getFreelancerRating,
  checkIfRated,
  calculateFreelancerRating,
} = require("../controllers/ratingController");

router.get("/", getRatings);
router.get("/:id", getRating);

router.get("/business/:businessId", getBusinessRating);
router.get("/freelancer/:freelancerId", getFreelancerRating);
router.post("/check", checkIfRated);
router.get("/calc/:id", calculateFreelancerRating);

router.post("/", createRating);
router.put("/:id", updateRating);
router.delete("/:id", deleteRating);

module.exports = router;
