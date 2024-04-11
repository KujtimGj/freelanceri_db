const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookmarkSchema = new Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    freelancerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Freelancer"
    }
})


const Bookmarks = mongoose.model("Bookmarks",bookmarkSchema);
module.exports=Bookmarks;