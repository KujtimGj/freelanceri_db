const express = require("express");
const router = express.Router();
const {
  applyForPost,
  getApplication,
  getMyApplications,
  getAllApplication,
  deleteApplication,
  getApplicationByPost,
  getBusinessApplications,
  getAcceptedApplications,
  getRejectedApplications,
  getPendingApplications,
  updateApplication,
  getContractedApplication,
  existingApplicationCheck,
} = require("../controllers/applyController");
const upload = require("../middlewares/fileUpload");

router.post("/", applyForPost);
//?GETS
router.get("/accepted/:businessId", getAcceptedApplications);
router.get("/rejected/:businessId", getRejectedApplications);
router.get("/under-review/:businessId", getPendingApplications);
router.get("/contracted/:businessId", getContractedApplication);
router.get("/check/:freelancerId/:postId", existingApplicationCheck);
router.get("/", getAllApplication);
router.get("/:id", getApplication);
router.get("/myApplications/:freelancerId", getMyApplications);
router.get("/byPost/:postId", getApplicationByPost);
router.get("/business/:businessId", getBusinessApplications);
router.patch("/:id", updateApplication);
//?DELETE
router.delete("/:id", deleteApplication);

module.exports = router;
