const express = require("express");
const router = express.Router();
const {getContract,getContracts,createContract,deleteContract}=require("../controllers/contractController")


router.get("/",getContracts);
router.get("/:id",getContract);
router.post("/",createContract);
router.delete("/:id",deleteContract);


module.exports=router;