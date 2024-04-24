const express = require("express");
const router = express.Router();
const {
  getBookmark,
  getBookmarks,
  getMyBookmarks,
  createBookmark,
  deleteBookmark,
  getActiveBookmarks,
} = require("../controllers/bookmarkController");

router.get("/", getBookmarks);
router.get("/:id", getBookmark);

router.get("/approved",getActiveBookmarks);
router.get("/freelancer/:freelancerId", getMyBookmarks);

router.post("/", createBookmark);
router.delete("/:id", deleteBookmark);

module.exports = router;
