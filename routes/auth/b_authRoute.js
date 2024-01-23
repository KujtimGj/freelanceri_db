const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/authMiddleware')


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
router.get("/", authMiddleware, getBusinesses);
router.get("/:id", authMiddleware,getSingleBusiness);
router.post('/login',loginBusiness)
router.post('/signup',signupBusiness)
router.put("/:id", authMiddleware, updateBusiness);
router.delete("/:id", authMiddleware, deleteBusiness);



module.exports=router