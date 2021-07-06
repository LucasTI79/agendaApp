import { Router } from 'express';
import PlanController from '../controllers/PlanController';

const planRouter = Router();

const planController = new PlanController();

planRouter.get('/', planController.index )
planRouter.post('/', planController.create )
planRouter.get('/:id', planController.show )

export default planRouter
