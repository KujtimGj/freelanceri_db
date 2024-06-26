const Blog = require("../models/blogModel");

const getBlogs = async(req,res)=>{
    try {
        const blogs=await Blog.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getBlog = async(req,res)=>{
    try {
        const {id}=req.params;
        const blog = await Blog.findById(id);
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createBlog = async(req,res)=>{
    try {
        const {title,content,cover}=req.body;
        const blog=await Blog.create({title,content,cover})
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const updateBlog = async(req,res)=>{
    try {
        const {id}=req.params;
        const blog = await Blog.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getBlog,getBlogs,createBlog,updateBlog}