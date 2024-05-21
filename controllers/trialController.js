const Trial = require("../models/trialModel");
const fs = require("fs");
const path = require("path");
const sendCompletionEmail = require("../utils/sendEmail");
require("dotenv").config();
const { reCaptchaSecret } = process.env;
const axios = require("axios");
const sendTrialEmail = require("../utils/trialEmail");

const getEmail = async (req, res) => {
  try {
    const trial = await Trial.find({}, { email: 1, _id: 0 });
    res.status(200).json(trial);
  } catch (error) {
    // Define the error variable here
    res.status(400).json({ error: error.message });
  }
};

const createTrial = async (req, res) => {
  try {
    const {
      fullName,
      email,
      userType,
      companyName,
      phone,
      jobTitle,
      sektori,
      education,
      experience,
      website,
      socials,
      recaptchaToken,
    } = req.body;

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
    console.log(recaptchaToken);

    if (!recaptchaResponse.data.success) {
      return res.status(403).json({ error: "reCAPTCHA verification failed" });
    }

    const existingUser = await Trial.findOne({ email });
    if (existingUser) {
      console.log("User with this email already exists");
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    const user = await Trial.create({
      fullName,
      email,
      userType,
      companyName,
      phone,
      jobTitle,
      sektori,
      education,
      experience,
      website,
      socials,
    });

    await sendCompletionEmail(email);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error in createTrial:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTrials = async (req, res) => {
  try {
    const trials = await Trial.find();
    res.status(200).json(trials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleTrial = async (req, res) => {
  try {
    const { id } = req.params;
    const trial = await Trial.findById(id);
    res.status(200).json(trial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTrial = async (req, res) => {
  try {
    const { id } = req.params;
    const trial = await Trial.findByIdAndUpdate(id);
    res.status(200).json(trial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTrial = async (req, res) => {
  try {
    const { id } = req.params;
    const trial = await Trial.findByIdAndDelete(id);
    res.status(200).json(trial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendEmail = async (req, res) => {
  try {
    const trialUsers = await Trial.find().exec(); // Fetch all trial users

    // Iterate over each trial user and send email
    for (const user of trialUsers) {
      const { fullName, email } = user;
      await sendTrialEmail({ recipientEmail: email, trialName: fullName });
    }

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const deleteScam = async (req, res) => {
//   try {
//     const scam = await Trial.deleteMany({
//       fullName: "Your Website Is Not Safe - Fake User 1 (Delete This)",
//     });

//     console.log(`${scam.deletedCount} records deleted.`);

//     res.status(200).json({ message: `${scam.deletedCount} records deleted.` });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  getEmail,
  getAllTrials,
  getSingleTrial,
  updateTrial,
  deleteTrial,
  createTrial,
  sendEmail,
};
