const express = require("express");
const router = express.Router();
const {getEducation,getEducations,createEducation,getFreelancerEducations,updateEducation,deleteEducation}=require("../controllers/educationController")

router.get("/:id",getEducation);
router.get("/",getEducations);
router.get("/freelancer/:id",getFreelancerEducations);
router.post("/",createEducation);
router.put("/:id",updateEducation);
router.delete("/:id",deleteEducation);

module.exports=router