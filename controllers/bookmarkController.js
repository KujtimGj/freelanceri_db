const Bookmark = require("../models/bookmarkModel");

const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find()
      .populate("freelancerId")
      .populate("postId");
    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const bookmark = await Bookmark.findById(id)
      .populate("freelancerId")
      .populate("postId");
    res.status(200).json(bookmark);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getActiveBookmarks =async (req,res)=>{
  try {
    const bookmarks = Bookmark.find({"postId.state":"Approved"});
    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const getMyBookmarks = async (req, res) => {
  try {
    const { freelancerId } = req.params;
    const bookmarks = await Bookmark.find({ freelancerId })
      .populate("freelancerId")
      .populate({path:"postId",populate:[{path:"profession"}]});      ;
    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createBookmark = async (req, res) => {
  try {
    const { postId, freelancerId } = req.body;
    const findBookmark = await Bookmark.findOne({ postId, freelancerId });

    if (findBookmark) {
      return res.status(409).json({
        error: "Bookmark already exists for this post and freelancer",
      });
    }
    const bookmark = await Bookmark.create({ postId, freelancerId });
    res.status(200).json(bookmark);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const bookmark = await Bookmark.findByIdAndDelete(id);
    res.status(200).json(bookmark);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBookmark,
  getBookmarks,
  getMyBookmarks,
  createBookmark,
  deleteBookmark,
  getActiveBookmarks
};
