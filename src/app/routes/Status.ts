import { Router } from 'express';
import StatusController from '../controllers/StatusController';

const statusRouter = Router();

const statusController = new StatusController();

statusRouter.get('/', statusController.index )
statusRouter.post('/', statusController.create )
// statusRouter.get('/:id', statusController.show )

export default statusRouter
