import { Request, Response } from "express";
import ProsthesisService from "../services/ProsthesisService";
import { IError } from '../errors/AppError';
import { stat } from "fs";

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
      const { isbn, name, dr, service, status } = req.body;
      await new ProsthesisService().create({ isbn, name, dr, service, status });
      return res.status(201).send()
    }catch(err){
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
   }
   async show(req: Request, res: Response){
    try{
     const { isbn } = req.params as { isbn: string };
     const prosthesis = await new ProsthesisService().show(isbn);
     return res.json(prosthesis)
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
   }
   async update(req: Request, res: Response){
     try{
       const { status } = req.body as { status: string }
       const { isbn } = req.params as { isbn: string };
       const prosthesis = await new ProsthesisService().update( isbn, status );
       res.json({prosthesis})
     }catch(err){
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
     }
   }
   async delete(req: Request, res: Response){
    try{
      const { isbn } = req.params as { isbn: string };
      const prosthesis = await new ProsthesisService().delete( isbn );
      res.json({prosthesis})
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
  }
}

export default ProsthesisController;
