const express = require("express");
const { createEmail,getEmails } = require("../controllers/homeEmail");
const router = express.Router();

router.post("/",createEmail);
router.get("/",getEmails)

module.exports = router;