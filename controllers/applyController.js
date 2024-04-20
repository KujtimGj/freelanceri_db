const mongoose = require("mongoose");
const Aplikimi = require("../models/applicationModel");
const Post = require("../models/postModel");
const Freelancer = require("../models/users/freelancerModel");
const Business = require("../models/users/businessModel");

const getApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Aplikimi.findById(id)
      .populate("postId")
      .populate("freelancerId")
      .populate("businessId");

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
    const { freelancerId } = req.params;
    const myApplication = await Aplikimi.find({
      freelancerId: freelancerId,
    })
      .populate("freelancerId")
      .populate("businessId")
      .populate({
        path: "postId",
        populate: [{ path: "city" }, { path: "profession" }],
      });
    res.status(200).json(myApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPendingApplications = async (req, res) => {
  try {
    const { businessId } = req.params;
    const apps = await Aplikimi.find({
      "business._id": businessId,
      state: "Under Review",
    });
    res.status(200).json(apps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAcceptedApplications = async (req, res) => {
  try {
    const { businessId } = req.params;
    const apps = await Aplikimi.find({
      "business._id": businessId,
      state: "Accepted",
    });
    res.status(200).json(apps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRejectedApplications = async (req, res) => {
  try {
    const app = await Aplikimi.find({ state: "Rejected" })
      .populate("postId")
      .populate("freelancerId");
    res.status(200).json(app);
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

const getBusinessApplications = async (req, res) => {
  try {
    const { businessId } = req.params;
    const aplikim = await Aplikimi.find({ businessId: businessId })
      .populate({
        path: "postId",
        populate: [{ path: "city" }, { path: "profession" }],
      })
      .populate("businessId")
      .populate("freelancerId");
    res.status(200).json(aplikim);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//?POST
const applyForPost = async (req, res) => {
  try {
    const {
      postId,
      freelancerId,
      freelancerPrice,
      duration,
      coverLetter,
      businessId,
      cv,
      state,
    } = req.body;

    // let cv = null;
    // if (req.file) {
    //   cv = req.file.path;
    // }

    const aplCheck = await Aplikimi.findOne({
      postId: postId,
      freelancerId: freelancerId,
    }).exec();

    if (!aplCheck) {
      const aplikimi = await Aplikimi.create({
        postId,
        freelancerId,
        businessId,
        freelancerPrice,
        duration,
        coverLetter,
        cv,
        state,
      });
      res.status(200).json({ aplikimi });
    } else {
      res.status(400).json({ error: "Application already exists" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//?UPDATE
const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const app = await Aplikimi.findByIdAndUpdate(id, req.body);
    res.status(200).json(app);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//?DELETE
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Aplikimi.findByIdAndRemove(id);
    res.status(200).json(application);
  } catch {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  applyForPost,
  getApplication,
  getMyApplications,
  getAllApplication,
  getApplicationByPost,
  getPendingApplications,
  getAcceptedApplications,
  getRejectedApplications,
  getBusinessApplications,
  deleteApplication,
  updateApplication,
};
