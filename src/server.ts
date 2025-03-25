
import express from "express"
import dotenv from "dotenv";

import router from "./routers"
import { connectDB } from "./config/db"

const app = express()

connectDB()

dotenv.config();
app.use(express.json())
app.use("/api", router)


export default app