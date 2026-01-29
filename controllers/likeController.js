// import model
import { Post } from "../models/postModel.js";
import { Like } from "../models/likeModel.js";

// route handler

// like a post
export const likePost = async (req, res) => {
    try{
    // fetch data from body of request
        const { post, user } = req.body;

    // create like object
        const like = new Like({ post, user,
        });

    // save like
        const savedLike = await like.save();

    // update the post collection
    // find the post by Id and add it to the like array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true}).populate("likes").exec();

        res.json({
            post: updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error: "Error while doing like"
        })
    }
    
}

// unlike a post
export const unlikePost = async (req, res) => {
    try{
        // fetch the data(post_id and like_id) from request body
        const {post, like} = req.body;

        // find and delete the like from like collection
        const deleteLike = await Like.findOneAndDelete({post: post, _id: like});

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deleteLike._id}}, {new: true});

        res.json({
            post: updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error: "Error while doing unlike"
        });
    }
}