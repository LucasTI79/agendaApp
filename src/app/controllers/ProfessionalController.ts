import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import Professional from '../models/Professional'
import ProfessionalService from '../services/ProfessionalService'

export default class ProfessionalController {
  async index(req: Request, res: Response) {
    try{
      const professional = await new ProfessionalService().index()

      return res.json(professional)
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response){
    try{
      const { name } = req.body;

      const professional = await new ProfessionalService().create(name)

      return res.json(professional);
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async show(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const professional = await getRepository(Professional).findOne({id})

      return res.json(professional)
    }catch(err){
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }

  }
  async update(req: Request, res: Response){
    try{
      const { name } = req.body
      const { id } = req.params as { id: string };
      const prosthesis = await new ProfessionalService().update(name, id);

      res.json({prosthesis})
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
  }
  async delete(req: Request, res: Response){
    try{
      const { id } = req.params as { id: string };
      await new ProfessionalService().delete(id);
      res.status(204)
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
  }
}
