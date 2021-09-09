import { Router } from "express";
import AuthController from "../controllers/AuthController";

import planRouter from "./Plan";
import professionalRouter from "./Professional";
import prosthesisRouter from "./Prosthesis";
import patientRouter from "./Auth";
import statusProsthesisRouter from "./StatusProstheis";
import statusAppointmentRouter from "./StatusAppointment";
import labRouter from "./Lab";
import serviceRouter from "./Service";
import userRouter from "./User";
import PatientController from "../controllers/PatientController";
import clinicRouter from "./Clinic";

const router = Router();

router.use('/users', userRouter)
// router.use('/patients', patientRouter)
router.get('/patients/search', new PatientController().search)
router.get('/patients', new PatientController().index)
router.post('/patients', new PatientController().create)
router.put('/patients/:id', new PatientController().update)
router.get('/patients/:id', new PatientController().show)
router.use('/professional', professionalRouter)
router.use('/plans', planRouter)
router.use('/labs', labRouter)
router.use('/services', serviceRouter)
router.use('/prosthesis/status', statusProsthesisRouter)
router.use('/appointment/status', statusAppointmentRouter)
router.use('/prosthesis', prosthesisRouter)
router.use('/clinics', clinicRouter)

router.post('/auth', new AuthController().authenticate)

router.get('/print', async (req, res) => {
  return res.send('print')
})

export default router;
