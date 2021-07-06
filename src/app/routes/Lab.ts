import { Router } from 'express';
import LabController from '../controllers/LabController';

const labRouter = Router();

const labController = new LabController();

labRouter.get('/', labController.index )
labRouter.post('/', labController.create )
// labRouter.get('/:id', labController. )

export default labRouter
