// import models
import { Post, Comment } from "../models"

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
        { push: { comments: savedComment._id } },
        { new: true },
      );

      // {new: true} will return the updated Post
    }
    catch(err){

    }
}