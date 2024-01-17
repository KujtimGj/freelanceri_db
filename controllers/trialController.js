const Trial=require('../models/trialModel');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

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


const createTrial = async (req, res) => {
  try {
    const { fullName, email, userType, freelancerDetails, employerDetails } =req.body;

    const user = await Trial.create({
      fullName,
      email,
      userType,
      freelancerDetails,
      employerDetails,
    });
    
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};


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