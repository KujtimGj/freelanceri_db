const Contract = require("../models/contractModel");

const getContract = async (req, res) => {
  const { id } = req.params;
  try {
    const contract = await Contract.findById(id)
      .populate("post")
      .populate("freelancer")
      .populate("business");
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getContracts = async (req, res) => {
  try {
    const contract = await Contract.find();
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createContract = async (req, res) => {
  try {
    const {
      freelancer,
      business,
      post,
      projectType,
      title,
      description,
      projectDescription,
      projectOffer,
      projectDate,
      milestones,
    } = req.body;
    const contract = await Contract.create({
      freelancer,
      business,
      post,
      projectType,
      title,
      description,
      projectDescription,
      projectOffer,
      projectDate,
      milestones,
    });
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteContract = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByIdAndDelete(id);
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getContract, getContracts, createContract, deleteContract };
