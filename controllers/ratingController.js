const Rating = require("../models/ratingModel");

const getRating = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findById(id)
      .populate("freelancerId")
      .populate("businessId")
      .exec();
    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRatings = async (req, res) => {
  try {
    const rating = await Rating.find()
      .populate("freelancerId")
      .populate("businessId");
    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createRating = async (req, res) => {
  try {
    const { freelancerId, businessId, rating, comment } = req.body;
    const ratings = await Rating.create({
      freelancerId,
      businessId,
      rating,
      comment,
    });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRating = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findByIdAndUpdate(id);
    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRating = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findByIdAndDelete(id);
    res.status(200).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFreelancerRating = async (req, res) => {
  try {
    const { freelancerId } = req.params;
    const ratings = await Rating.find({ freelancerId })
      .populate("freelancerId")
      .populate("businessId");
    res.status(200).json(ratings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBusinessRating = async (req, res) => {
  try {
    const { businessId } = req.params;
    const ratings = await Rating.find({ businessId })
      .populate("freelancerId")
      .populate("businessId");
    res.status(200).json(ratings);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRating,
  getRatings,
  createRating,
  updateRating,
  deleteRating,
  getFreelancerRating,
  getBusinessRating,
};
