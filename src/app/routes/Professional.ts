import { Router } from 'express';
import ProfessionalController from '../controllers/ProfessionalController';

const professionalRouter = Router();

const professionalController = new ProfessionalController();

professionalRouter.get('/', professionalController.index )
professionalRouter.post('/', professionalController.create )
professionalRouter.put('/:id', professionalController.update )
professionalRouter.get('/:id', professionalController.show )
professionalRouter.delete('/:id', professionalController.delete )

export default professionalRouter
