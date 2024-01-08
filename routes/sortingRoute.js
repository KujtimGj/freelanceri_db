const express = require("express");
const router = express.Router();
const{sortCategory,sortCity}=require('../controllers/sortingController')

router.get("/city/:cityID",sortCity)
router.get("/category/:id",sortCategory);


module.exports=router;