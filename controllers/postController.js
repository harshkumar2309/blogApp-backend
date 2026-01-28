import { Post } from "../models/postModel.js";

export const createPost = async (req, res) => {
    try{
        // fetch data from request body
        const {title, body} = req.body
        const post = new Post({title, body})
        const savedPost = await post.save();

        res.json({
            post: savedPost
        });
    }
    catch(error){
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
}


export const getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();     // This will fetch all the posts with its comments and likes ids

        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(err){
        return res.status(400).json({
            error: "Error while fetching posts"
        });
    }
}