import express from "express"

// import controller
import { dummyLink } from "../controllers/likeController.js "
import { createComment } from "../controllers/commentController.js"
import { createPost, getAllPosts } from "../controllers/postController.js";

// export router
export const router = express.Router();

// Create mapping
router.get("/dummyroute", dummyLink)
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);