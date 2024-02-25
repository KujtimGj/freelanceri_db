const ContactUs = require("../models/contactUsModel");

const getContact = async(req,res)=>{
    try {
        const {id}=req.params;
        const contact = await ContactUs.findById(id);
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getContacts = async(req,res)=>{
    try {
        const contact = await ContactUs.find();
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createContact = async(req,res)=>{
    try {
        const contact = await ContactUs.create(req.body);
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getContact,getContacts,createContact}