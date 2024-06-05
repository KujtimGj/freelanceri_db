const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
} = require("../controllers/blogController");

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
module.exports = router;
