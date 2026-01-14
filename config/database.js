import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connected Successfully"))
    .catch( (err) => {
        console.log("DB is facing connection issues");
        console.log(err);
        process.exit(1);
    })
}