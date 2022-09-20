const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now

router.post("/createComment/:id", commentsController.createComment);

router.put("/likeComment/:comment", commentsController.likeComment);

router.delete("/deleteComment/:comment", commentsController.deleteComment);

module.exports = router;