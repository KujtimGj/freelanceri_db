const EmailHome = require("../models/homeEmail");

const getEmails = async(req,res)=>{
    try {
        const mails = await EmailHome.find()
        res.status(200).json(mails)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const mail = await EmailHome.create({ email });
    res.status(200).json(mail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createEmail,getEmails };
