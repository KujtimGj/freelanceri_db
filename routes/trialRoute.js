const express = require("express");
const router = express.Router();

const {getAllTrials,getSingleTrial,updateTrial,deleteTrial,createTrial}=require('../controllers/trialController')


router.get("/",getAllTrials);
router.get("/:id",getSingleTrial);
router.post("/",createTrial);
router.put("/:id",updateTrial);
router.delete("/:id",deleteTrial);

module.exports=router
