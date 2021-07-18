import { Router } from 'express';
import LabController from '../controllers/LabController';

const labRouter = Router();

const labController = new LabController();

labRouter.get('/', labController.index )
labRouter.post('/', labController.create )
labRouter.get('/:id', labController.show )
labRouter.put('/:id', labController.update )
labRouter.delete('/:id', labController.delete )


export default labRouter
