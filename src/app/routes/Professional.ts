import { Router } from 'express';
import ProfessionalController from '../controllers/ProfessionalController';

const professionalRouter = Router();

const professionalController = new ProfessionalController();

professionalRouter.get('/', professionalController.index )
professionalRouter.post('/', professionalController.create )
// patientRouter.get('/:id', patientController. )

export default professionalRouter
