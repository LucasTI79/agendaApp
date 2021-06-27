import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import PatientController from "./app/controllers/PatientController";
import PlanController from "./app/controllers/PlanController";
import ProsthesisController from "./app/controllers/ProsthesisController";
import UserControler from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";

const router = Router();

router.post('/users', new UserControler().store )
router.get('/users', authMiddleware, new UserControler().index )

router.get('/patients', authMiddleware, new PatientController().index )

router.get('/plans', new PlanController().index )
router.post('/plans', new PlanController().store )
router.get('/plans/:id', new PlanController().show )

router.get('/prosthesis', new ProsthesisController().index)
router.get('/prosthesis/:isbn', new ProsthesisController().show)
router.post('/prosthesis', new ProsthesisController().create)
router.put('/prosthesis/:isbn', new ProsthesisController().update)
router.delete('/prosthesis/:isbn', new ProsthesisController().delete)

router.post('/auth', new AuthController().authenticate )

export default router;
