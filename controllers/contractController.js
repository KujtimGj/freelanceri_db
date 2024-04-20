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
    const contract = await Contract.find()
      .populate("post")
      .populate("freelancer")
      .populate("business");
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const contracts = await Contract.find({ freelancer: id });
    res.status(200).json(contracts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerActiveContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const contracts = await Contract.find({ freelancer: id, state: "Active" })
      .populate("post")
      .populate("freelancer")
      .populate("business");
    res.status(200).json(contracts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerFinishedContracts = async (req, res) => {
  try {
    const { id } = req.params;
    const contracts = await Contract.find({
      freelancer: id,
      state: "Finished",
    })
      .populate("post")
      .populate("freelancer")
      .populate("business");
    res.status(200).json(contracts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFinishedContracts = async (req, res) => {
  try {
    const contracts = await Contract.find({ state: "Finished" })
      .populate("post")
      .populate("freelancer")
      .populate("business");
    res.status(200).json(contracts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getActiveContracts = async (req, res) => {
  try {
    const contracts = await Contract.find({ state: { $in: ["Active"] } })
      .populate("post")
      .populate("freelancer")
      .populate("business");

    res.status(200).json(contracts);
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
      state,
    } = req.body;

    const contractCheck = await Contract.find({ business, freelancer, post });
    if (contractCheck.length > 0) {
      return res.status(400).json({ error: "Contract already exists" });
    }
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
      state,
    });
    res.status(200).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateContract = async (req, res) => {
  try {
    const { id } = req.params;
    // Assuming you have the update data in req.body
    const updatedContract = await Contract.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // { new: true } option returns the modified document rather than the original one
    res.status(200).json(updatedContract);
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

module.exports = {
  getContract,
  getContracts,
  createContract,
  deleteContract,
  updateContract,
  getFinishedContracts,
  getActiveContracts,
  getFreelancerContracts,
  getFreelancerActiveContracts,
  getFreelancerFinishedContracts,
};
