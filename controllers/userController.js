const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create webtoken
const createToken = (_id, email, firstName, lastName) => {
  return jwt.sign({ _id, email, firstName, lastName }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(
      user._id,
      user.email,
      user.firstName,
      user.lastName
    );

    res
      .status(200)
      .json({
        email,
        token,
        firstName: user.firstName,
        lastName: user.lastName,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup(firstName, lastName, email, password);
    const token = createToken(
      user._id,
      user.email,
      user.firstName,
      user.lastName
    );

    res.status(200).json({email,token,firstName: user.firstName,lastName: user.lastName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
