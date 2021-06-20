import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import PatientController from "./app/controllers/PatientController";
import PlanController from "./app/controllers/PlanController";
import ProsthesisController from "./app/controllers/ProsthesisController";
import UserControler from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";

const router = Router();

router.post('/users', UserControler.store )
router.get('/users', authMiddleware, UserControler.index )

router.get('/patients', authMiddleware, PatientController.index )

router.get('/plans', PlanController.index )
router.post('/plans', PlanController.store )
router.get('/plans/:id', PlanController.show )

router.get('/prosthesis', ProsthesisController.index)
router.post('/prosthesis', ProsthesisController.create)


router.post('/auth', AuthController.authenticate )

export default router;
