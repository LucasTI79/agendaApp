import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';

const serviceRouter = Router();

const serviceController = new ServiceController();

serviceRouter.get('/', serviceController.index )
serviceRouter.post('/', serviceController.create )
serviceRouter.put('/:id', serviceController.update )
serviceRouter.get('/:id', serviceController.show )
serviceRouter.delete('/:id', serviceController.delete )

export default serviceRouter
