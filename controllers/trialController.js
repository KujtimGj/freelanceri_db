const Trial=require('../models/trialModel');
const fs = require('fs');
const path = require('path');
const sendCompletionEmail = require('../utils/sendEmail')



const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');

const recaptchaProjectID = "freelanceri-1705581626054"; // Replace with your Google Cloud Project ID
const recaptchaSiteKey = "6Lfe9VQpAAAAAPBwltZ80QOMOLk0SMs3jruBJQiP"; // Replace with your reCAPTCHA site key


const createTrial = async (req, res) => {
  try {
    const {
      fullName,
      email,
      userType,
      freelancerDetails,
      employerDetails,
      recaptchaToken,
    } = req.body;

    // Verify reCAPTCHA
    const recaptchaScore = await createAssessment({
      projectID: recaptchaProjectID,
      recaptchaKey: recaptchaSiteKey,
      token: recaptchaToken,
      recaptchaAction: "user_registration",
    });

    // Check if the reCAPTCHA score is acceptable (adjust the threshold as needed)
    if (recaptchaScore >= 0.5) {
      // Proceed with user creation
      const user = await Trial.create({
        fullName,
        email,
        userType,
        freelancerDetails,
        employerDetails,
      });

      await sendCompletionEmail(email);

      res.status(200).json(user);
    } else {
      // ReCAPTCHA verification failed
      res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * Create an assessment to analyze the risk of a UI action.
 *
 * @param {Object} params - Parameters for creating the assessment.
 * @param {string} params.projectID - Google Cloud Project ID.
 * @param {string} params.recaptchaKey - reCAPTCHA site key.
 * @param {string} params.token - The generated token obtained from the client.
 * @param {string} params.recaptchaAction - Action name corresponding to the token.
 * @returns {Promise<number|null>} - The reCAPTCHA score or null if verification fails.
 */
async function createAssessment({
  projectID,
  recaptchaKey,
  token,
  recaptchaAction,
}) {
  try {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);

    const request = {
      assessment: {
        event: {
          token,
          siteKey: recaptchaKey,
        },
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);

    if (!response.tokenProperties.valid) {
      console.log(
        `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
      );
      return null;
    }

    if (response.tokenProperties.action === recaptchaAction) {
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });

      return response.riskAnalysis.score;
    } else {
      console.log(
        "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
      );
      return null;
    }
  } catch (error) {
    console.error("Error in createAssessment:", error);
    return null;
  }
}




const getAllTrials=async(req,res)=>{
    try {
        const trials = await Trial.find();
        res.status(200).json(trials)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getSingleTrial =async(req,res)=>{
    try {
        const {id} = req.params;
        const trial = await Trial.findById(id);
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const updateTrial = async(req,res)=>{
    try {
        const {id} =req.params;
        const trial = await Trial.findByIdAndUpdate(id)
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTrial = async(req,res)=>{
    try {
        const {id} =req.params;
        const trial = await Trial.findByIdAndDelete(id);
        res.status(200).json(trial)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getAllTrials,getSingleTrial,createTrial,updateTrial,deleteTrial}