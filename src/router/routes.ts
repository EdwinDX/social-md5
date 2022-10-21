
import { friendRouter } from "./friend-router";
import { Router } from "express";
import { userProfileRouter } from "./user-router";
import { authRouter } from "./auth-router";
import commentController from "./comment-router";
import routerPost from "./post-router";
import routerLike from "./like-router";
import routerCommnet from "./comment-router";


export const router = Router();

router.use("/users", userProfileRouter);
router.use("/posts", routerPost);
router.use("/auth", authRouter);
router.use("", friendRouter);







//LIKE ROUTER
router.use('/likes',routerLike);

//COMMENT ROUTER
router.use('/comments',routerCommnet)


