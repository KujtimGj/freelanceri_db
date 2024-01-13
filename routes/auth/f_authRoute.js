const express = require("express");
const router = express.Router();

const {
  loginFreelancer,
  signupFreelancer,
  getFreelancers,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
} = require("../../controllers/userController");


router.get('/',getFreelancers);
router.get('/:id',getSingleFreelancer);
router.post('/login',loginFreelancer);
router.post('/signup',signupFreelancer);
router.put("/:id",updateFreelancer);
router.delete("/:id",deleteFreelancer);


module.exports=router