// multer.js

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 4 * 1024 * 1024 }, // 5 MB limit
});


module.exports = upload;
