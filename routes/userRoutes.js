const express = require('express')

const router = express.Router()


//controller functions
const {loginBusiness,signupBusiness,loginFreelancer,signupFreelancer} = require('../controllers/userController')


//BUSINESS
router.post('/business/login',loginBusiness)
router.post('/business/signup',signupBusiness)

//FREELANCER
router.post('/freelancer/login',loginFreelancer)
router.post('/freelancer/signup',signupFreelancer)


module.exports=router