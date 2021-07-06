import { Router } from 'express';
import UserControler from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = Router();

const userController = new UserControler();

userRouter.get('/', authMiddleware , userController.index )
userRouter.post('/', userController.create )
// userRouter.get('/:id', userController. )

export default userRouter
