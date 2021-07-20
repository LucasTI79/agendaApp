import { Request, Response } from "express";
import ProsthesisService from "../services/ProsthesisService";
import { IError } from '../errors/AppError';
export default class ProsthesisController {
  async index(req: Request, res: Response){
   try{
    const prosthesis = await new ProsthesisService().index();
    return res.json(prosthesis)
   }catch(err){
    let error = err as IError;
    res.status(error.statusCode).json({ error: error.message })
   }
  }
  async create(req: Request, res: Response){
    try{
      const { isbn, patient, professional, service, lab, status, box, region, DeliveryDate } = req.body
      const prosthesis = await new ProsthesisService().create({
        isbn,
        patient,
        professional,
        service,
        lab,
        status,
        box,
        region,
        DeliveryDate
      });

      return res.status(201).send(prosthesis)
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
       const { patient, professional, service, lab, status, box, region, DeliveryDate } = req.body
       const { isbn } = req.params as { isbn: string };

       const prosthesis = await new ProsthesisService().update({
        isbn,
        patient,
        professional,
        service,
        lab,
        status,
        box,
        region,
        DeliveryDate });

       res.json({prosthesis})
     }catch(err){
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
     }
   }
   async delete(req: Request, res: Response){
    try{
      const { isbn } = req.params as { isbn: string };
      await new ProsthesisService().delete( isbn );
      return res.status(204).send()
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
  }
}
