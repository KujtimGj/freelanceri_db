const express = require("express");
const router = express.Router();

const {getContact,getContacts,createContact} = require("../controllers/contactUsController");
const authMiddleware = require("../middlewares/authMiddleware");


router.get("/:id",authMiddleware,getContact);
router.get("/",authMiddleware,getContacts);
router.post("/",createContact)

module.exports=router