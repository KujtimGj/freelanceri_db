const express = require('express');
const router = express.Router()
const upload = require('../middlewares/fileUpload')
const {
  getPost,
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  findMyPosts,
  getSimilarPosts,
  getApprovedPosts,
  getPendingPosts,
} = require("../controllers/postController");




//?GET ALL
router.get('/all',getAllPosts)

//? GET APPROVED POSTS
router.get("/approved",getApprovedPosts)


//? GET PENDING POSTS
router.get("/pending",getPendingPosts)


//? GET MY POSTS
router.get("/myposts/:id", findMyPosts);

//?GET a single post
router.get('/:id',getPost)

//? GET SIMILAR post
router.get("/similarPost/:postId",getSimilarPosts);

//?POST
router.post("/",upload.single('cv'), createPost);

//?DELETE
router.delete('/:id',deletePost)

//?UPDATE
router.patch('/:id',updatePost)
module.exports=router