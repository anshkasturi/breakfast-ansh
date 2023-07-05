import express from "express"
import mysql from "mysql"
import cors from "cors"
import nodemailer from "nodemailer"
import {db} from "./db.js"
import postRoutes from "./routes/posts.js"
import dotenv from "dotenv"
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/posts", postRoutes);

app.post('/api/contact-add', (req, res) => {
    const query = 'INSERT INTO contact_info (name, email, message, dateposted) VALUES (?, CURRENT_TIMESTAMP())';
    const values = [req.body.name, req.body.email, req.body.message]

    db.query(query, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json('Created')
    })


})


app.get("/", (req, res)=>{
    res.json("Hello welcome to the backend")
})


app.listen(8800, () => {
    console.log("Connected to backend!")
})