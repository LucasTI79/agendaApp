import { Router } from 'express';
import ClinicController from '../controllers/ClinicController';

const clinicRouter = Router();

const clinicController = new ClinicController();

clinicRouter.get('/', clinicController.index)
clinicRouter.post('/', clinicController.create)
clinicRouter.get('/:id', clinicController.show)
clinicRouter.put('/:id', clinicController.update)
clinicRouter.delete('/:id', clinicController.delete)


export default clinicRouter
