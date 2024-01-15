const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const professions = new Schema({
  category: { type: String, required: true, unique: true },
  categoryID: { type: Number, required: true, unique: true },
});

const Profession = mongoose.model("Profession", professions);
module.exports=Profession