import { Router } from 'express'
import ProsthesisController from '../controllers/ProsthesisController';
import ProsthesisLogsController from '../controllers/ProsthesisLogsController';

const prosthesisRouter = Router();

const prosthesisController = new ProsthesisController();
const prosthesisLogsController = new ProsthesisLogsController();

prosthesisRouter.get('/logs',  prosthesisLogsController.index)
prosthesisRouter.get('/logs/isb/:isbn', prosthesisLogsController.showByIsbn)
prosthesisRouter.get('/logs/status/:status', prosthesisLogsController.showByStatus)

prosthesisRouter.get('/',  prosthesisController.index)
prosthesisRouter.get('/:isbn',  prosthesisController.show)
prosthesisRouter.post('/',  prosthesisController.create)
prosthesisRouter.put('/:isbn',  prosthesisController.update)
prosthesisRouter.delete('/:isbn',  prosthesisController.delete)

export default prosthesisRouter;
