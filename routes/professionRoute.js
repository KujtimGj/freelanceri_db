const express = require("express");
const router = express.Router();
const {
  getAllCategoryJobs,
  getSingleCategoryJob,
  createCategoryJob,
} = require("../controllers/professionController");

router.get("/",getAllCategoryJobs)
router.get("/:categoryID", getSingleCategoryJob);
router.post("/",createCategoryJob);


module.exports=router