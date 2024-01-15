const Trial=require('../models/trialModel');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

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

const createTrial = async(req,res)=>{
    try {
        const {firstName,lastName,email,profession,userType} =req.body;
        const trial = await Trial.create({
          firstName,
          lastName,
          email,
          profession,
          userType,
        });
        
     async function sendEmail(email) {
          try {
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "platforma.freelanceri@gmail.com",
                pass: "zlms uaeu xkps fhwq",
              },
            });


            const htmlFilePath = path.join(
              __dirname,
              "..",
              "utils",
              "email.html"
            );
            const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
            const formattedHtml =htmlContent.replace('${firstName}',firstName).replace("${lastName}",lastName);

            const imagePath = path.join(__dirname,'..','utils',"logo_txt.png");
            const imageBuffer = fs.readFileSync(imagePath);
            const base64EncodedImage = imageBuffer.toString("base64");

            // Replace the image placeholder in the HTML
            const finalHtml = formattedHtml.replace(
              "${base64EncodedImage}",
              base64EncodedImage
            );

            const mailOptions = {
              from: "Freelanceri",
              to: email,
              subject: 'Mirë se vini ne Freelanceri',
              html: formattedHtml,
            };

            await transporter.sendMail(mailOptions);

            console.log("Email sent successfully");
          } catch (error) {
            console.error("Error sending email:", error);
          }
        }

        await sendEmail(email);
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