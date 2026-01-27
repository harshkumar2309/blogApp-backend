import express from "express"

// import controller
import { dummyLink } from "../controllers/likeController.js"

// export router
export const router = express.Router();

// Create mapping
router.get("/dummyroute", dummyLink)