const express = require("express");
const router = express.Router();
const {
  applyForPost,
  getApplication,
  getMyApplications,
  getAllApplication,
  deleteApplication,
  getApplicationByPost,
  getBusinessApplications
} = require("../controllers/applyController");
const upload = require("../middlewares/fileUpload");

router.post("/", applyForPost);
//?GETS
router.get("/", getAllApplication);
router.get("/:id", getApplication);
router.get("/myApplications/:freelancerId", getMyApplications);
router.get("/byPost/:postId", getApplicationByPost);
router.get("/business/:businessId",getBusinessApplications);
//?DELETE
router.delete("/:id", deleteApplication);

module.exports = router;
