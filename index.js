import express from "express"
import { connectWithDB } from "./config/database.js";
import dotenv from "dotenv"


const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("App is running succesfully"); 
})

connectWithDB();