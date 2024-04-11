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
  getPostForBusiness,
} = require("../controllers/postController");
const { getUserBookmarks, bookmarkPost } = require('../controllers/userController');




//?GET ALL
router.get('/all',getAllPosts)

//? GET APPROVED POSTS
router.get("/approved",getApprovedPosts)


//? GET PENDING POSTS
router.get("/pending",getPendingPosts)


//? GET MY POSTS
router.get("/myposts/:id", findMyPosts);
router.get("/business/:id",getPostForBusiness);

//?GET a single post
router.get('/:id',getPost)

//? GET Bookmarks
router.get("/:postId/bookmarks",getUserBookmarks);
//? GET SIMILAR post
router.get("/similarPost/:postId",getSimilarPosts);

//?POST
router.post("/", createPost);

//?POST bookmark
router.post("/:id/bookmark",bookmarkPost);

//?DELETE
router.delete('/:id',deletePost)

//?UPDATE
router.patch('/:id',updatePost)

module.exports=router