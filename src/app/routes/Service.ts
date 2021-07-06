import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';

const serviceRouter = Router();

const serviceController = new ServiceController();

serviceRouter.get('/', serviceController.index )
serviceRouter.post('/', serviceController.create )
// serviceRouter.get('/:id', serviceController. )

export default serviceRouter
