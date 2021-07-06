import { Router } from 'express';
import PatientController from '../controllers/PatientController';

const patientRouter = Router();

const patientController = new PatientController();

patientRouter.get('/', patientController.index )
patientRouter.post('/', patientController.create )
// patientRouter.get('/:id', patientController. )

export default patientRouter
