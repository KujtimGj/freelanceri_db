const Post = require("../models/postModel");
const mongoose = require("mongoose");
const moment = require("moment");
const Application = require("../models/applicationModel");

//GET ALL
const getAllPosts = async (req, res) => {
  try {
    const populatedPosts = await Post.find({})
      .populate("userId")
      .populate("city")
      .populate("profession")
      .exec();

    // Sorting the posts with "approved" state first
    const sortedPosts = populatedPosts.sort((a, b) => {
      if (a.state === "approved" && b.state !== "approved") {
        return -1; // "approved" state comes first
      } else if (a.state !== "approved" && b.state === "approved") {
        return 1; // "approved" state comes later
      } else {
        return 0; // no preference for other states
      }
    });

    res.status(200).json(sortedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET SINGLE
const getPost = async (req, res) => {};
//GET SINGLE
const getPostForBusiness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  try {
    const populatedPost = await Post.findById(id)
      .populate("userId")
      .populate("city")
      .populate("profession")
      .exec();
    if (!populatedPost) {
      return res.status(404).json({ error: "No such post" });
    }

    const applications = await Application.find({ postId: id })
      .populate("freelancerId")
      .populate("postId")
      .populate("businessId");

    res.status(200).json({ populatedPost, applications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? GET APPROVED POSTS
const getApprovedPosts = async (req, res) => {
  try {
    const post = await Post.find({ state: "Approved" })
      .populate("userId")
      .populate("city")
      .populate("profession");
    res.status(200).json(post);

    // sadsadas
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPendingPosts = async (req, res) => {
  try {
    const post = await Post.find({ state: "Pending" });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//POST
const createPost = async (req, res) => {
  try {
    const {
      userId,
      title,
      description,
      duration,
      neededWorkers,
      budget,
      city,
      requirements,
      profession,
      experienceLevel,
      expiresAt,
    } = req.body;

    let cv = null;

    // Check if a file is attached to the request
    if (req.file) {
      cv = req.file.path;
    }
    const expireAtDate = moment(expiresAt, "DD/MM/YYYY").toDate();

    const post = await Post.create({
      userId,
      title,
      description,
      duration,
      neededWorkers,
      budget,
      city,
      requirements,
      profession,
      experienceLevel,
      expiresAt: expireAtDate,
    });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//DELETE
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such post" });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid post ID" });
  }

  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    if (!post) {
      return res.status(404).json({ error: "No such post found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const findMyPosts = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("User ID:", id);

    const myPosts = await Post.find({ userId: id })
      .populate("userId")
      .populate("city")
      .populate("profession");

    console.log("Query:", JSON.stringify(myPosts));

    res.status(200).json(myPosts);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ error: error.message });
  }
};

const getSimilarPosts = async (req, res) => {
  try {
    const { postId } = req.params;

    const originalPost = await Post.findById(postId);

    if (!originalPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    const similarPosts = await Post.find({
      "profession.categoryID": originalPost.profession.categoryID,
      _id: { $ne: postId },
      state: "Approved",
    })
      .populate("userId")
      .populate("city")
      .populate("profession")
      .limit(5);

    res.status(200).json(similarPosts);
  } catch (error) {
    console.error("Error retrieving similar posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getApprovedPosts,
  getPendingPosts,
  getPostForBusiness,
  getPost,
  deletePost,
  updatePost,
  findMyPosts,
  getSimilarPosts,
};
