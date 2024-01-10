const Trial=require('../models/trialModel');

const getAllTrials=async(req,res)=>{
    try {
        const trials = await Trial.find();
        res.status(200).json(trials)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getSingleTrial =async(req,res)=>{
    try {
        const {id} = req.params;
        const trial = await Trial.findById(id);
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createTrial = async(req,res)=>{
    try {
        const {firstName,lastName,email,profession,userType} =req.body;
        const trial = await Trial.create({
          firstName,
          lastName,
          email,
          profession,
          userType,
        });
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateTrial = async(req,res)=>{
    try {
        const {id} =req.params;
        const trial = await Trial.findByIdAndUpdate(id)
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTrial = async(req,res)=>{
    try {
        const {id} =req.params;
        const trial = await Trial.findByIdAndDelete(id);
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getAllTrials,getSingleTrial,createTrial,updateTrial,deleteTrial}