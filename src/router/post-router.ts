
import { Router } from "express";
import { auth } from "../middleware/auth";
import postController from '../controller/api/post.api';
import routerCommnet from './comment-router';
const routerPost = require('express').Router();
//COMMENT ROUTER
// routerPost.use('/comments',routerCommnet)

//LIKE ROUTER
// routerPost.use("/likes", routerLike);
routerPost.get("/getpost",auth, postController.getPostByUserId);

routerPost.get("/postDetail/:id", auth, postController.getAPost)

routerPost.get("", auth, postController.getAllPost);

//ADD POST
routerPost.post("",auth, postController.newPost);

//UPDATE POST
routerPost.put("/:id",auth, postController.updatePost);

//DELETE POST
routerPost.delete("/:id",auth, postController.deleteAPost);

//GET POST
routerPost.get("/:id", auth, postController.getPost);



export default routerPost;
