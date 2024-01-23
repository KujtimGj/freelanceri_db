const express = require("express");
const router = express.Router();
const authMiddleware =  require('../../middlewares/authMiddleware')

const {
  loginFreelancer,
  signupFreelancer,
  getFreelancers,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
} = require("../../controllers/userController");


router.get("/", authMiddleware,getFreelancers);
router.get("/:id", authMiddleware,getSingleFreelancer);
router.post('/login',loginFreelancer);
router.post('/signup',signupFreelancer);
router.put("/:id", authMiddleware,updateFreelancer);
router.delete("/:id", authMiddleware,deleteFreelancer);


module.exports=router