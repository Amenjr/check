const express = require("express");
const { addComment, GetComment, UpdateComment, DeleteComment } = require("../controllers/comment");

const commentRoute = express.Router();


commentRoute.post("/addComment",addComment);
commentRoute.get("/",GetComment);
commentRoute.put("/:id",UpdateComment);
commentRoute.delete("/:id",DeleteComment);




module.exports=commentRoute;