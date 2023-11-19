const Post =require('../models/postModel');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image");


//GET ALL
const getPosts = async(req,res)=>{
    const posts= await Post.find().sort({createdAt:-1})
    res.status(200).send(posts)
}

//GET SINGLE
const getPost = async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const post = await Post.findById(id)
    if(!post){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(post )
}

//POST
const createPost = async (req, res) => {
  try {
    // Extracting other fields from the request body
    const {
      title,
      description,
      duration,
      neededWorkers,
      budget,
      city,
      requirements,
      postCategory,
      postCategoryID,
      userId,
      experienceLevel
    } = req.body;

    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      try {
        const post = await Post.create({
          title,
          description,
          duration,
          neededWorkers,
          budget,
          city,
          requirements,
          postCategory,
          postCategoryID,
          userId,
          experienceLevel,
          image: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          },
        });
        console.log(req.file);
        console.log(post);
        res.status(200).json(post);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    });
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