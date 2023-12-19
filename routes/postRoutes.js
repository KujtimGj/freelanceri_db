const express = require('express');
const router = express.Router()
const {
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost
} = require('../controllers/postController')


const upload = require('../controllers/multer')

//?GET ALL
router.get('/',getPosts)


//?GET a single post
router.get('/:id',getPost)

//?POST
router.post("/", createPost);

//?DELETE
router.delete('/:id',deletePost)

//?UPDATE
router.patch('/:id',updatePost)
ffgtr
module.exports=router