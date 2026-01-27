import express from "express"
import { connectWithDB } from "./config/database.js";

import dotenv from "dotenv"
dotenv.config()

import { router } from "./routes/blog.js";

const app = express()
const PORT = process.env.PORT

// middleware
app.use(express.json())

//mount 
app.use("/api/v1", router);

connectWithDB();

// start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);   
})

app.get("/", (req,res) => {
    res.send(`<h1>This is the HomePage</h1>`)
})