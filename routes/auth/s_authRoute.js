const express = require("express");
const router = express.Router();


const {loginAdmin,signupAdmin}=require("../../controllers/super-admin-c.js")

router.post("/login",loginAdmin);
router.post("/signup",signupAdmin)


module.exports=router