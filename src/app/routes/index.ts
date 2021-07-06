import { Router } from "express";
import AuthController from "../controllers/AuthController";

import planRouter from "./Plan";
import professionalRouter from "./Professional";
import prosthesisRouter from "./Prosthesis";
import patientRouter from "./Auth";
import statusRouter from "./Status";
import labRouter from "./Lab";
import serviceRouter from "./Service";
import userRouter from "./User";

const router = Router();

router.use('/users', userRouter)
router.use('/patients', patientRouter)
router.use('/professional', professionalRouter)
router.use('/plans', planRouter)
router.use('/labs', labRouter)
router.use('/services', serviceRouter)
router.use('/status', statusRouter)
router.use('/prosthesis', prosthesisRouter)

router.post('/auth', new AuthController().authenticate )

export default router;
