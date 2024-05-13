const Business = require("../models/users/businessModel");
const Freelancer = require("../models/users/freelancerModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Post = require("../models/postModel");
const Contract = require("../models/contractModel");
const Application = require("../models/applicationModel");
const Posts = require("../models/postModel");
const Profession = require("../models/professionModel");
const axios = require("axios");
const { reCaptchaSecret } = process.env;

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginBusinessWithGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const loginBusinessWithGoogleCallback = (req, res) => {
  try {
    const token = createToken(req.user._id);
    res.status(200).json({ token, business: req.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginFreelancerWithGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const loginFreelancerWithGoogleCallback = (req, res) => {
  try {
    const token = createToken(req.user._id);
    res.status(200).json({ token, freelancer: req.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//BUSINESS
const loginBusiness = async (req, res) => {
  const { email, password } = req.body;
  try {
    const business = await Business.loginBusiness(email, password);
    const token = createToken(business._id);
    res.status(200).json({ token, business });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const signupBusiness = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    city,
    companyName,
    companyType,
    phone,
    website,
    rating,
    recaptchaToken,
  } = req.body;

  try {
    const recaptchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: reCaptchaSecret,
          response: recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(403).json({ error: "reCAPTCHA verification failed" });
    }

    // Proceed with user registration
    const business = await Business.signupBusiness(
      firstName,
      lastName,
      email,
      password,
      city,
      companyName,
      companyType,
      phone,
      website,
      rating,
      recaptchaToken
    );

    // Generate authentication token
    const token = createToken(business._id);
    res.status(200).json({ business, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find().populate("rating.freelancerId");
    res.status(200).json(businesses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id)
      .select("-password")
      .populate("rating.freelancerId");
    res.status(200).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const { overallRating, ...updatedBusinessData } = req.body;

    const updatedBusiness = await Business.findByIdAndUpdate(
      id,
      updatedBusinessData,
      { new: true }
    );

    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findByIdAndDelete(id);
    res.status(200).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const summarizeBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id);
    const contracts = await Contract.find({ business: id });
    const applications = await Application.find({ businessId: id });
    const postime = await Posts.find({ userId: id });
    res.status(200).json({ business, contracts, applications, postime });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findProfiles = async (req, res) => {
  try {
    const { professionIds } = req.body; // Assuming you're passing professionIds as an array in the request body
    const allFreelancers = [];

    for (const professionId of professionIds) {
      const freelancers = await Freelancer.find({
        profession: professionId,
      }).populate("profession");
      allFreelancers.push({ professionId, freelancers });
    }

    res.status(200).json(allFreelancers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Freelancer
const loginFreelancer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const freelancer = await Freelancer.loginFreelancer(email, password);
    const token = createToken(freelancer._id);
    res.status(200).json({ freelancer, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const signupFreelancer = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    city,
    profession,
    socials,
    skills,
    experiences,
    educations,
    bookmarks,
    clients,
    website,
    recaptchaToken,
  } = req.body;

  console.log("Received payload:", req.body);
  try {
    // Verify reCAPTCHA token
    const recaptchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: reCaptchaSecret, // Your reCAPTCHA secret key
          response: recaptchaToken,
        },
      }
    );

    // Check if reCAPTCHA verification failed
    if (!recaptchaResponse.data.success) {
      return res.status(403).json({ error: "reCAPTCHA verification failed" });
    }

    // Proceed with user registration
    const freelancer = await Freelancer.signupFreelancer(
      firstName,
      lastName,
      email,
      password,
      city,
      profession,
      socials,
      skills,
      experiences,
      educations,
      bookmarks,
      clients,
      website
    );

    // Generate authentication token
    const token = createToken(freelancer._id);

    // Return successful response with token and freelancer data
    res.status(200).json({ freelancer, token });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(400).json({ error: error.message });
  }
};

const getFreelancers = async (req, res) => {
  try {
    let query = {};

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, "i");
      query.$or = [{ firstName: searchRegex }, { lastName: searchRegex }];
    }

    if (req.query.category) {
      const professions = await Profession.find({
        category: req.query.category,
      });
      const professionIds = professions.map((profession) => profession._id);
      query.profession = { $in: professionIds };
    }

    const freelancers = await Freelancer.find(query).populate("profession");

    res.status(200).json(freelancers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleFreelancer = async (req, res) => {
  try {
    const { id } = req.params;
    const freelancer = await Freelancer.findById(id).populate("profession");
    res.status(200).json(freelancer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFreelancer = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      password,
      profession,
      skills,
      experiences,
      educations,
      socials,
    } = req.body;

    const { github, behance, linkedIn } = socials;

    const updatedFreelancer = await Freelancer.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        password,
        profession,
        skills,
        experiences,
        educations,
        socials: {
          github,
          behance,
          linkedIn,
        },
      },
      { new: true }
    ); // Setting { new: true } returns the updated document
    res.status(200).json(updatedFreelancer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFreelancer = async (req, res) => {
  try {
    const { id } = req.params;
    const freelancer = await Freelancer.findByIdAndDelete(id);
    res.status(200).json(freelancer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteExperience = async (req, res) => {
  try {
    const { freelancerId, experienceId } = req.params;

    // Find the freelancer by ID
    const freelancer = await Freelancer.findById(freelancerId);

    // Check if the freelancer exists
    if (!freelancer) {
      return res.status(404).json({ error: "Freelancer not found" });
    }

    // Find the index of the experience to delete
    const experienceIndex = freelancer.experiences.findIndex(
      (exp) => exp._id.toString() === experienceId
    );

    // Check if the experience exists
    if (experienceIndex === -1) {
      return res.status(404).json({ error: "Experience not found" });
    }

    // Remove the experience from the array
    freelancer.experiences.splice(experienceIndex, 1);

    // Save the updated freelancer (optional)
    await freelancer.save();

    // Delete the experience document from the database
    await Experience.findByIdAndDelete(experienceId);

    res
      .status(200)
      .json({ message: "Experience deleted successfully", freelancer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserBookmarks = async (req, res) => {
  try {
    const { userId } = req.params;

    const posts = await Post.find({ bookmarks: userId });

    const userBookmarks = posts.map((post) => ({
      postId: post._id,
      title: post.title,
    }));

    res.status(200).json(userBookmarks);
  } catch (error) {
    console.error("Error getting user bookmarks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  loginBusiness,
  signupBusiness,
  getBusinesses,
  getSingleBusiness,
  updateBusiness,
  deleteBusiness,
  summarizeBusiness,
  findProfiles,
  loginBusinessWithGoogleCallback,
  loginFreelancer,
  signupFreelancer,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
  getUserBookmarks,
  deleteExperience,
  loginFreelancerWithGoogleCallback,
  getFreelancers,
};
