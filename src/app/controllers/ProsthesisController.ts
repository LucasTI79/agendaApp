import { Request, Response } from "express";
import ProsthesisService from "../services/ProsthesisService";
import { IError } from '../errors/AppError';

class ProsthesisController {
  async index(req: Request, res: Response){
   try{
    const prosthesis = await new ProsthesisService().index();
    return res.json({ prosthesis })
   }catch(err){
    let error = err as IError;
    res.status(error.statusCode).json({ error: error.message })
   }
  }
  async create(req: Request, res: Response){
    try{
      const { isbn, name, dr, service } = req.body;
      await new ProsthesisService().create({ isbn, name, dr, service });
      return res.status(201).send()
    }catch(err){
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
   }
}

export default ProsthesisController;
