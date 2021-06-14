import { Response, Request } from "express";
import Plan from "../models/Plan";

export interface IPlanController {
  index(req: Request, res: Response): Promise<Plan[]>;
  store: Promise<Plan>;
  show(req: Request, res: Response): Promise<Plan>;
  update: Promise<Plan>;
  delete: Promise<void>;
}