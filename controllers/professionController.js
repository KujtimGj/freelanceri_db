const Profession = require('../models/professionModel');

const getAllCategoryJobs = async(req,res)=>{
    try {
        const category = await Profession.find()
          .sort({ categoryID: 1 })
          .exec();
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getSingleCategoryJob = async(req,res)=>{
    try {
        const {categoryID}=req.params;
        const category = await Profession.findOne({ categoryID: categoryID });
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createCategoryJob = async(req,res)=>{
    try {
        const {category,categoryID}=req.body;
        const c = await Profession.create({ category, categoryID });
        res.status(200).json(c)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {getAllCategoryJobs,getSingleCategoryJob,createCategoryJob}