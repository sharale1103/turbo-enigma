import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js";
import cors from "cors";



dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());

app.use("/api/message",messageRoutes)



app.use("/api/auth",authRoutes)
app.use(express.json())
app.use(cors({
    origin:"https://turbo-enigma-4pjxww6vwwqc5x7p-5173.app.github.dev/",
    credentials:true
}))
app.listen(PORT,()=>{
    console.log("server is running on port ")
    connectDB()
})