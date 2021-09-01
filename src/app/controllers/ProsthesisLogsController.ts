import { Request, Response } from "express";
import ProsthesisLogsService from "../services/ProsthesisLogsService";
import { IError } from '../errors/AppError';

export default class ProsthesisLogsController {

  async index(req: Request, res: Response) {
    try {
      const logs = await new ProsthesisLogsService().index();
      res.json(logs)
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }

  async showByIsbn(req: Request, res: Response) {
    try {
      const { isbn } = req.params as { isbn: string };
      const prosthesis = await new ProsthesisLogsService().showByIsbn(isbn);
      return res.json(prosthesis)
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }

  async showByStatus(req: Request, res: Response) {
    try {
      const { status } = req.params as { status: string };
      const prosthesis = await new ProsthesisLogsService().showByStatus(status);
      return res.json(prosthesis)
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
}
