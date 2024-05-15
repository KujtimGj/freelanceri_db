const SuperAdmin = require("../models/users/superModel");
const jwt = require("jsonwebtoken");

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

module.exports = { loginAdmin, signupAdmin };
