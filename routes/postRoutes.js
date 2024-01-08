const express = require('express');
const router = express.Router()
const {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost,
  findMyPosts,
} = require("../controllers/postController");




//?GET ALL
router.get('/',getPosts)


router.get("/myposts/:id", findMyPosts);

//?GET a single post
router.get('/:id',getPost)

//?POST
router.post("/", createPost);

//?DELETE
router.delete('/:id',deletePost)

//?UPDATE
router.patch('/:id',updatePost)
module.exports=router