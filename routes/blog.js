import express from "express"

// import controller
import { dummyLink } from "../controllers/likeController.js"
import { createComment } from "../controllers/commentController.js"

// export router
export const router = express.Router();

// Create mapping
router.get("/dummyroute", dummyLink)
router.post("/comments/create", createComment);