const express = require("express");
const router = express.Router();
const {getBlogs,createBlog,getBlog}=require("../controllers/blogController");


router.get("/",getBlogs);
router.get("/:id",getBlog)
router.post("/",createBlog)

module.exports=router