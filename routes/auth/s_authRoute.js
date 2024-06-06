const express = require("express");
const router = express.Router();


const {loginAdmin,signupAdmin, summarizeStats}=require("../../controllers/super-admin-c.js")

router.post("/login",loginAdmin);
router.post("/signup",signupAdmin);
router.get("/sum",summarizeStats);


module.exports=router