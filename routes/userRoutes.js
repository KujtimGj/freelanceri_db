const express = require('express')

const router = express.Router()


//controller functions
const {
  loginBusiness,
  signupBusiness,
  getBusinesses,
  getSingleBusiness,
  updateBusiness,
  deleteBusiness,
  loginFreelancer,
  signupFreelancer,
  getFreelancers,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
} = require("../controllers/userController");


//BUSINESS
router.get("/business", getBusinesses);
router.get("/business/:id", getSingleBusiness);
router.post('/business/login',loginBusiness)
router.post('/business/signup',signupBusiness)
router.put("/business/:id");
router.delete("/business/:id");

//FREELANCER
router.get("/",getFreelancers);
router.get("/freelancer/:id",getSingleFreelancer);
router.post('/freelancer/login',loginFreelancer)
router.post('/freelancer/signup',signupFreelancer)
router.patch("/freelancer/:id",updateFreelancer);
router.delete("/freelancer/:id",deleteFreelancer);


module.exports=router