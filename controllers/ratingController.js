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
    const checkRatin = await Rating.findOne({ freelancerId, businessId });
    if (checkRatin) {
      return res.status(400).json({ error: "Rating already exists" });
    }
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
    if (ratings.length === 0) {
      return res
        .status(404)
        .json({ message: "No ratings found for this user" });
    }
    const totalSum = ratings.reduce((sum, item) => sum + item.rating, 0);
    const averageRating = totalSum / ratings.length;

    const fiveStar = await Rating.find({ rating: 5 });
    const five = fiveStar.length;

    const fourStar = await Rating.find({ rating: 4 });
    const four = fourStar.length;

    const threeStars = await Rating.find({ rating: 3 });
    const three = threeStars.length;

    const twoStars = await Rating.find({ rating: 2 });
    const two = twoStars.length;

    const oneStar = await Rating.find({ rating: 1 });
    const one = oneStar.length;
    res
      .status(200)
      .json({ ratings, averageRating, five, four, three, two, one });
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

const checkIfRated = async (req, res) => {
  const { freelancerId, businessId } = req.body;

  try {
    const check = await Rating.find({ freelancerId, businessId });

    if (check.length > 0) {
      res.status(200).json({ rated: true });
    } else {
      res.status(200).json({ rated: false });
    }
  } catch (error) {
    console.error("Error checking rating:", error);
    res.status(500).json({ error: "Internal server error" });
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
  checkIfRated,
};
