import { Router } from 'express'
import ProsthesisController from '../controllers/ProsthesisController';

const prosthesisRouter = Router();

const prosthesisController = new ProsthesisController();

prosthesisRouter.get('/',  prosthesisController.index)
prosthesisRouter.get('/:isbn',  prosthesisController.show)
prosthesisRouter.post('/',  prosthesisController.create)
prosthesisRouter.put('/:isbn',  prosthesisController.update)

export default prosthesisRouter;
