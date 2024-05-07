const express = require("express");
const router = express.Router();
const {getExperience,getExperiences,createExperience,updateExperience,deleteExperience, getFreelancerExps}=require("../controllers/experienceController")


router.get("/:id",getExperience);
router.get("/",getExperiences);
router.get("/freelancer/:id",getFreelancerExps)
router.post("/",createExperience);
router.put("/:id",updateExperience);
router.delete("/:id",deleteExperience)

module.exports=router