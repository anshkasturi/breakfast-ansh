import express from "express"
import {getPosts, getPost} from "../controllers/post.js"

const router = express.Router()

router.get("/test", (req,res) => {
    res.json("Welcome to test")
})
router.get("/", getPosts)
router.get("/all", getPosts)
router.get("/:id", getPost)

export default router;