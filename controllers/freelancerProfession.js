const FreelancerProfession = require("../models/freelancerProfession");

const getFP = async (req, res) => {
  try {
    const { id } = req.params;
    const fp = await FreelancerProfession.find(id)
      .populate("freelancer")
      .populate("profId");
    res.status(200).json(fp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFPs = async (req, res) => {
  try {
    const fps = await FreelancerProfession.find()
      .populate("freelancer")
      .populate("profId");
    res.status(200).json(fps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFFP = async (req, res) => {
  try {
    const { id } = req.params;
    const ffp = await FreelancerProfession.find({ freelancer: id })
      .populate("freelancer")
      .populate("profId");
    res.status(200).json(ffp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createFP = async (req, res) => {
  try {
    const existingFP = await FreelancerProfession.findOne({
      freelancer: req.body.freelancer,
      profId: req.body.profId,
    });

    if (existingFP) {
      return res
        .status(400)
        .json({ error: "Freelancer already has this profession." });
    }

    const cfp = await FreelancerProfession.create(req.body);

    res.status(200).json(cfp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFP = async (req, res) => {
  try {
    const { id } = req.params;
    const ufp = await FreelancerProfession.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(ufp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFP = async (req, res) => {
  try {
    const { id } = req.params;
    const dfp = await FreelancerProfession.findByIdAndDelete(id);
    res.status(200).json(dfp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFP, getFPs, getFFP, createFP, updateFP, deleteFP };
