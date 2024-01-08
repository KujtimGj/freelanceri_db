const City = require('../models/cityModel');

const getCities = async(req,res)=>{
    try {
        const cities = await City.find();
        res.status(200).json(cities)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getCity = async(req,res)=>{
    try {
        const {id} = req.params;
        const city = await City.findById(id);
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createCity = async(req,res)=>{
    try {
        const {city, cityID}=req.body;
        const qyteti = await City.create({city,cityID});
        res.status(200).json(qyteti)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateCity = async(req,res)=>{
    try {
        const {id}=req.params;
        const city = await City.findByIdAndUpdate(id);
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findByIdAndDelete(id);
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports={
    getCity,
    getCities,
    createCity,
    updateCity,
    deleteCity
}