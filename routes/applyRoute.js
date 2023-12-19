const express = require("express");
const router = express.Router();
const{applyForPost,getApplication}=require('../controllers/applyController');


router.post('/',applyForPost)
router.get('/:id',getApplication)

module.exports=router