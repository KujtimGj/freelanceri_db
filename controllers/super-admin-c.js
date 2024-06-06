const SuperAdmin = require("../models/users/superModel");
const jwt = require("jsonwebtoken");
const Freelancer = require("../models/users/freelancerModel");
const Business = require("../models/users/businessModel");
const Posts = require("../models/postModel");
const Applications = require("../models/applicationModel");
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupAdmin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const admin = await SuperAdmin.signupAdmin(fullName, email, password);
    const token = createToken(admin._id);
    res.status(200).json({ admin, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await SuperAdmin.loginAdmin(email, password);
    const token = createToken(admin._id);
    res.status(200).json({ admin, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const summarizeStats = async(req,res)=>{
  try {
    const freelancers = await Freelancer.find();
    const businesses = await Business.find();
    const posts = await Posts.find();
    const applications = await Applications.find();
    res.status(200).json({freelancers,businesses,posts,applications})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = { loginAdmin, signupAdmin,summarizeStats };
