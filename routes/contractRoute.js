const express = require("express");
const router = express.Router();
const {getContract,getContracts,createContract,deleteContract, updateContract}=require("../controllers/contractController")


router.get("/",getContracts);
router.get("/:id",getContract);
router.post("/",createContract);
router.delete("/:id",deleteContract);
router.patch("/:id",updateContract);


module.exports=router;