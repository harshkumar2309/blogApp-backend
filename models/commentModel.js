import mongoose from "mongoose"

// route handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Post",   // This is the reference to the Post model
    },
    user: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
})

// export
export const Comment = mongoose.model("Comment", commentSchema);