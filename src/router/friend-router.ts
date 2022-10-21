import { Router } from "express";
import friendController from "../controller/api/friend.api";
import { auth } from "../middleware/auth";
export const friendRouter = Router();
friendRouter.use(auth);
friendRouter.post("/friend/:id", friendController.addFriend);

