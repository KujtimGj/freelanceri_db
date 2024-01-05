const mongoose = require('mongoose');
const Application = require("../models/applicationModel");
const Post = require("../models/postModel")


const applyForPost=async(req,res)=>{
    try {
        const { postId, freelancerId, freelancerPrice, coverLetter } = req.body;
        const aplikimi =await  Application.create({
          postId,
          freelancerId,
          freelancerPrice,
          coverLetter
    });
        res.status(200).json({aplikimi})
    } catch (error) {
        res.status(400).json({error:error.message})    
    }
}

const getApplication =async(req,res)=>{
    try {
        const { id } = req.params;

        const application = await Application.findById(id)
          .populate("postId")
          .populate("freelancerId");

        if (!application) {
          return res.status(404).json({ message: "Application not found" });
        }

        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


module.exports={applyForPost,getApplication};