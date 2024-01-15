const mongoose = require("mongoose");
const Aplikimi = require("../models/applicationModel");
const Post = require("../models/postModel");
const Freelancer = require("../models/users/freelancerModel");
const Business = require("../models/users/businessModel");

const applyForPost = async (req, res) => {
  try {
    const { postId, freelancerId, freelancerPrice, coverLetter, businessId } =
      req.body;
    let cv = null;
    if (req.file) {
      cv = req.file.path;
    }
    const aplikimi = await Aplikimi.create({
      postId,
      freelancerId,
      businessId,
      freelancerPrice,
      coverLetter,
      cv,
    });
    res.status(200).json({ aplikimi });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Aplikimi.findByIdAndRemove(id);
    res.status(200).json(application);
  } catch {
    res.status(400).json({ error: error.message });
  }
};

const getApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Aplikimi.findById(id)
      .populate("postId")
      .populate("freelancerId");

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMyApplications = async (req, res) => {
  try {
    const myApplication = await Aplikimi.find({
      freelancerId: req.params.freelancerId,
    });
    res.status(200).json(myApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getApplicationByPost = async (req, res) => {
  try {
    const app = await Aplikimi.find({ postId: req.params.postId });
    res.status(200).json(app);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllApplication = async (req, res) => {
  try {
    const apps = await Aplikimi.find()
      .populate("freelancerId", [
        "_id",
        "firstName",
        "lastName",
        "email",
        "city",
        "profession",
        "skills",
        "education",
        "experiences",
      ])
      .populate("businessId", [
        "_id",
        "firstName",
        "lastName",
        "email",
        "city",
        "companyName",
        "companyType",
        "role",
      ])
      .populate("postId", [
        "_id",
        "title",
        "description",
        "duration",
        "neededWorkers",
        "budget",
        "city",
        "requirements",
        "postCategory",
        "postCategoryID",
        "experienceLevel",
        "cv",
        "coverLetter",
        "expiresAt",
      ]);

    if (!apps || apps.length === 0) {
      return res.status(404).json({ error: "No applications found" });
    }

    const result = apps.map((app) => ({
      post: app.postId,
      freelancer: app.freelancerId,
      business: app.businessId,
      freelancerPrice: app.freelancerPrice,
      coverLetter: app.coverLetter,
      cv: app.cv,
      createdAt: app.createdAt,
      updatedAt: app.updatedAt,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  applyForPost,
  getApplication,
  getMyApplications,
  getAllApplication,
  getApplicationByPost,
  deleteApplication,
};
