const City = require('../models/cityModel');
const Post = require('../models/postModel');

const sortCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const sortCategory = await Post.find({ postCategoryID: id });
    res.status(200).json(sortCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sortCity = async (req, res) => {
  try {
    const { cityID } = req.params;
    const parsedCityID = parseInt(cityID);

    if (isNaN(parsedCityID)) {
      return res.status(400).json({ error: "Invalid cityID" });
    }

    const city = await City.findOne({ cityID: parsedCityID });

    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  sortCategory,
  sortCity
};