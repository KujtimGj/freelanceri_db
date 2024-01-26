const Business = require("../models/users/businessModel");
const Freelancer = require("../models/users/freelancerModel");
const jwt = require("jsonwebtoken");
const passport = require('passport');




//create webtoken
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};





// Google authentication for Business
const loginBusinessWithGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});


const loginBusinessWithGoogleCallback = (req, res) => {
  try {
    const token = createToken(req.user._id);
    res.status(200).json({ token, business: req.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Google authentication for Freelancer
const loginFreelancerWithGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
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
    role
  } = req.body;

  try {
    const business = await Business.signupBusiness(
      firstName,
      lastName,
      email,
      password,
      city,
      companyName,
      companyType,
      role
    );
    const token = createToken(business._id);
    res.status(200).json({ business, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id);
    res.status(200).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findByIdAndUpdate(id);
    res.status(200).json(business);
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
    res.status(400).json({error:error.message})
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
  const { firstName, lastName, email, password, city, profession } = req.body;

  try {
    const freelancer = await Freelancer.signupFreelancer(
      firstName,
      lastName,
      email,
      password,
      city,
      profession
    );
    const token = createToken(freelancer._id);
    res.status(200).json({ freelancer, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getFreelancers = async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleFreelancer = async (req, res) => {
  try {
    const { id } = req.params;
    const freelancer = await Freelancer.findById(id);
    res.status(200).json(freelancer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFreelancer = async (req, res) => {
  try {
    const { id } = req.params;
    const freelancer = await Freelancer.findByIdAndUpdate(id);
    res.status(200).json(freelancer);
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


module.exports = {
  loginBusiness,
  signupBusiness,
  getBusinesses,
  getSingleBusiness,
  updateBusiness,
  deleteBusiness,
  loginBusinessWithGoogleCallback,
  loginFreelancer,
  signupFreelancer,
  getFreelancers,
  getSingleFreelancer,
  updateFreelancer,
  deleteFreelancer,
  loginFreelancerWithGoogleCallback,
};
