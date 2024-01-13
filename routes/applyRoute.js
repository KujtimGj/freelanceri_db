const express = require("express");
const router = express.Router();
const{applyForPost,getApplication, getMyApplications}=require('../controllers/applyController');


router.post('/',applyForPost)
router.get('/:id',getApplication)
router.get("/myApplications/:freelancerId", getMyApplications);

module.exports=router