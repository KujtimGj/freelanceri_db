const express = require("express");
const router = express.Router();
const {
  getAllCategoryJobs,
  getSingleCategoryJob,
  createCategoryJob,
  updateCategoryJob,
} = require("../controllers/professionController");

router.get("/", getAllCategoryJobs);
router.get("/:categoryID", getSingleCategoryJob);
router.post("/", createCategoryJob);
router.put("/:id", updateCategoryJob);

module.exports = router;
