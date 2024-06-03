const EmailHome = require("../models/homeEmail");
const sendHomeEmail = require("../utils/home-email");

const getEmails = async (req, res) => {
  try {
    const mails = await EmailHome.find();
    res.status(200).json(mails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const mail = await EmailHome.create({ email });
    await sendHomeEmail(email);

    res.status(200).json(mail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createEmail, getEmails };
