const express = require("express");
const router = express.Router();
const {
  applyForPost,
  getApplication,
  getMyApplications,
  getAllApplication,
  deleteApplication,
  getApplicationByPost,
} = require("../controllers/applyController");
const upload = require("../middlewares/fileUpload");

router.post("/", applyForPost);
router.get("/", getAllApplication);
router.get("/:id", getApplication);
router.get("/myApplications/:freelancerId", getMyApplications);
router.get("/byPost/:postId", getApplicationByPost);
router.delete("/:id", deleteApplication);

module.exports = router;
