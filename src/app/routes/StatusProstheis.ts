import { Router } from 'express';
import StatusProsthesisController from '../controllers/StatusProsthesisController';

const statusProsthesisRouter = Router();

const statusProsthesisController = new StatusProsthesisController();

statusProsthesisRouter.get('/', statusProsthesisController.index)
statusProsthesisRouter.post('/', statusProsthesisController.create)
statusProsthesisRouter.get('/:id', statusProsthesisController.show)
statusProsthesisRouter.put('/:id', statusProsthesisController.update)
statusProsthesisRouter.delete('/:id', statusProsthesisController.delete)

export default statusProsthesisRouter
