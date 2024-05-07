const Experience = require("../models/experienceModel");

const getExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await Experience.findById(id);
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExperiences = async (req, res) => {
  try {
    const exp = await Experience.find();
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createExperience = async (req, res) => {
  try {
    const exp = await Experience.create(req.body);
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await Experience.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await Experience.findByIdAndDelete(id);
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerExps = async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await Experience.find({ freelancer: id });
    res.status(200).json(exp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getExperience,
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
  getFreelancerExps
};
