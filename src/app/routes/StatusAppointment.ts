import { Router } from 'express';
import StatusAppointmentController from '../controllers/StatusAppointmentController';

const statusAppointmentRouter = Router();

const statusAppointmentController = new StatusAppointmentController();

statusAppointmentRouter.get('/', statusAppointmentController.index)
statusAppointmentRouter.post('/', statusAppointmentController.create)
statusAppointmentRouter.get('/:id', statusAppointmentController.show)
statusAppointmentRouter.put('/:id', statusAppointmentController.update)
statusAppointmentRouter.delete('/:id', statusAppointmentController.delete)

export default statusAppointmentRouter
