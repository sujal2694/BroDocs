import express from 'express';
import { listOfUsers, loginUser,registerdUser } from '../controllers/userController.js';

const userRouter = express.Router();
userRouter.post("/register",registerdUser)
userRouter.post("/login",loginUser)
userRouter.get("/list",listOfUsers)

export default userRouter;