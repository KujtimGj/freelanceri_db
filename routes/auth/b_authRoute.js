const express = require('express')
const router = express.Router()


//controller functions
const {
  loginBusiness,
  signupBusiness,
  getBusinesses,
  getSingleBusiness,
  updateBusiness,
  deleteBusiness
} = require("../../controllers/userController");


//BUSINESS
router.get("/", getBusinesses);
router.get("/:id", getSingleBusiness);
router.post('/login',loginBusiness)
router.post('/signup',signupBusiness)
router.put("/:id",updateBusiness);
router.delete("/:id",deleteBusiness);



module.exports=router