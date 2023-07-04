import express from "express"
import mysql from "mysql"
import cors from "cors"
import {db} from "./db.js"
import postRoutes from "./routes/posts.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/posts", postRoutes);

app.get("/", (req, res)=>{
    res.json("Hello welcome to the backend")
})


app.listen(8800, () => {
    console.log("Connected to backend!")
})