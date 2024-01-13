const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype === "application/pdf") {
      callback(null, true);
    } else {
      console.log("Only PDF files supported.");
      callback(null, false);
    }
  },
});

module.exports = upload;
