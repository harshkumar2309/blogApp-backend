import express from "express"
import { connectWithDB } from "./config/database.js";
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT

// middleware
app.use(express.json())

connectWithDB();