import{Router}from 'express';
import AuthController from "../controller/api/auth.api";

export const  authRouter = Router()
authRouter.post('/register',AuthController.register);
authRouter.post('/login',AuthController.login);