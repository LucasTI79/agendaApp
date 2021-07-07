import { Router } from 'express';
import PatientController from '../controllers/PatientController';

const patientRouter = Router();

const patientController = new PatientController();

patientRouter.get('/', patientController.index)
patientRouter.post('/', patientController.create)
patientRouter.put('/:id', patientController.update)
patientRouter.get('/:id', patientController.show)

export default patientRouter

