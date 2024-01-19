const express = require("express");
const router = express.Router();

const {getAllTrials,getSingleTrial,updateTrial,deleteTrial,createTrial}=require('../controllers/trialController');
const authMiddleware = require("../middlewares/authMiddleware");


router.get("/",authMiddleware,getAllTrials);
router.get("/:id",authMiddleware,getSingleTrial);
router.post("/",createTrial);
router.put("/:id", authMiddleware,updateTrial);
router.delete("/:id", authMiddleware, deleteTrial);

module.exports=router
