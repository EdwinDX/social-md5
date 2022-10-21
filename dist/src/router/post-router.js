"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middleware/auth");
const post_api_1 = __importDefault(require("../controller/api/post.api"));
const routerPost = require('express').Router();
//COMMENT ROUTER
// routerPost.use('/comments',routerCommnet)
//LIKE ROUTER
// routerPost.use("/likes", routerLike);
routerPost.get("/getpost", auth_1.auth, post_api_1.default.getPostByUserId);
routerPost.get("/postDetail/:id", auth_1.auth, post_api_1.default.getAPost);
routerPost.get("", auth_1.auth, post_api_1.default.getAllPost);
//ADD POST
routerPost.post("", auth_1.auth, post_api_1.default.newPost);
//UPDATE POST
routerPost.put("/:id", auth_1.auth, post_api_1.default.updatePost);
//DELETE POST
routerPost.delete("/:id", auth_1.auth, post_api_1.default.deleteAPost);
//GET POST
routerPost.get("/:id", auth_1.auth, post_api_1.default.getPost);
exports.default = routerPost;
