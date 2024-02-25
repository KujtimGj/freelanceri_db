const express = require("express");
const router = express.Router();

const {getContact,getContacts,createContact} = require("../controllers/contactUsController");


router.get("/:id",getContact);
router.get("/",getContacts);
router.post("/",createContact)

module.exports=router