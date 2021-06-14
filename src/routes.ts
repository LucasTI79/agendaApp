import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import PatientController from "./app/controllers/PatientController";
import PlanController from "./app/controllers/PlanController";
import UserControler from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";

const router = Router();

router.post('/users', UserControler.store )
router.get('/users', authMiddleware, UserControler.index )

router.get('/patients', authMiddleware, PatientController.index )

router.get('/plans', PlanController.index )
router.post('/plans', PlanController.store )
router.get('/plans/:id', PlanController.show )

router.post('/auth', AuthController.authenticate )

export default router;