const Education = require("../models/educationSchema");

const getEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id);
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEducations = async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerEducations = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.find({ freelancer: id });
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndDelete(id);
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEducation,
  getEducations,
  createEducation,
  getFreelancerEducations,
  updateEducation,
  deleteEducation,
};
