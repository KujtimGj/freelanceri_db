const express = require("express");
const router = express.Router();
const {
  getCity,
  getCities,
  createCity,
  updateCity,
  deleteCity,
} = require("../controllers/cityController");


router.get("/",getCities);
router.get("/:id",getCity);
router.post("/",createCity);
router.patch("/:id",updateCity);
router.delete("/:id",deleteCity);


module.exports = router;
