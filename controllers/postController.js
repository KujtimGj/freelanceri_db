const Post =require('../models/postModel');
const mongoose = require('mongoose');
const moment = require('moment');
//GET ALL
const getPosts = async(req,res)=>{
    const populatedPosts = await Post.find().sort({createdAt:-1}).populate("userId").exec();
    console.log(populatedPosts);
    res.json(populatedPosts); 
    // const posts= await Post.find().sort({createdAt:-1})
    // res.status(200).send(posts)
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
      coverLetter,
      expiresAt
    } = req.body;

    let cv = null;

    // Check if a file is attached to the request
    if (req.file) {
      cv = req.file.path;
    }
    const expireAtDate = moment(expiresAt,'DD/MM/YYYY').toDate();

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
      cv,
      coverLetter,
      expiresAt: expireAtDate,
    });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
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


const findMyPosts = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("User ID:", id);

    const myPosts = await Post.find({ userId: id });

    console.log("Query:", JSON.stringify(myPosts));

    res.status(200).json(myPosts);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ error: error.message });
  }
};



module.exports={
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost,
    findMyPosts 
}