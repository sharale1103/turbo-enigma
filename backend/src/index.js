import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js"


dotenv.config();
const PORT = process.env.PORT;
const app = express();





app.use("/api/auth",authRoutes)
app.use(express.json())

app.listen(PORT,()=>{
    console.log("server is running on port ")
    connectDB()
})