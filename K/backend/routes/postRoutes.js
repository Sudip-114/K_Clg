// backend/routes/postRoutes.js
const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/postController");

router.get("/", getPosts);      // GET all posts
router.post("/", createPost);   // Add new post

module.exports = router;
