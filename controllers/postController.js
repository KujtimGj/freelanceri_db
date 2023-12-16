const Post =require('../models/postModel');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image");
const mongoose = require('mongoose');

//GET ALL
const getPosts = async(req,res)=>{
    const populatedPosts = await Post.find().populate("userId").exec();
    console.log(populatedPosts);
    res.json(populatedPosts);
    const posts= await Post.find().sort({createdAt:-1})
    res.status(200).send(posts)
}

//GET SINGLE
const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' });
    }

    try {
        const populatedPost = await Post.findById(id).populate('userId').exec();

        if (!populatedPost) {
            return res.status(404).json({ error: 'No such post' });
        }

        res.status(200).json(populatedPost);
    } catch (error) {
        // Handle any errors that occurred during the execution of the function
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//POST
const createPost = async (req, res) => {
  try {
    const {
      userId,
      title,
      description,
      duration,
      neededWorkers,
      budget,
      city,
      requirements,
      postCategory,
      postCategoryID,
      experienceLevel,
    } = req.body;


      try {
        const post = await Post.create({
          userId,
          title,
          description,
          duration,
          neededWorkers,
          budget,
          city,
          requirements,
          postCategory,
          postCategoryID,
          experienceLevel,
        });
        console.log(post);
        res.status(200).json(post);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};


//DELETE
const deletePost = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such post'})
    }

    const post = await Post.findOneAndDelete({_id:id})

    res.status(200).json(post)
}

//UPDATE
const updatePost = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such post'})
    }
    
    const post = await Post.findOneAndUpdate({_id:id},{...req.body})

    if(!post){
        return res.status(400).json({error:'No such post'})
    }

    res.status(200).json(post)
}



module.exports={
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
}