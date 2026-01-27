// import models
import { Post } from "../models/postModel.js";
import { Comment } from "../models/commentModel.js";


// business logic
export const createComment = async (req, res) => {
    try{
      // fetch data from req body
      const { post, user, body } = req.body;

      // create comment
      const comment = new Comment({
        post,
        user,
        body,
      });

      // save the new comment into DB
      const savedComment = await comment.save();

      // find the post by ID and add the new comment to its comment array
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        {$push: { comments: savedComment._id } },
        { new: true },
      )
      .populate("comments")
      .exec();

      // {new: true} will return the updated Post
      // populate the comments array with comment documents. Mtlb ki populate krne pr actual comment aaega nhi to bs comment ki id aaegi.

      res.json({
        post: updatedPost,
      });
    }
    catch(err){
        return res.status(500).json({
          error: "Error while creating comment",
        });
    }
}