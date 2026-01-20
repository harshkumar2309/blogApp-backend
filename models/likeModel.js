import mongoose from "mongoose"

// route handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Post",   // This is the reference to the Post model
    },
    user: {
        type: String,
        required: true,
    },
});

// export
export const Like = mongoose.model("Like", likeSchema);