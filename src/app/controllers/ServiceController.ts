import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import Service from '../models/Service'
import ServicesService from '../services/ServicesService'


export default class ProfessionalController {
  async index(req: Request, res: Response) {
    try{
      const services = await new ServicesService().index()

      return res.json(services)
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response){
    try{
      const { name, lab } = req.body;

      const service = await new ServicesService().create(name, lab)

      return res.json(service);
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async show(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const service = await getRepository(Service).findOne(id)

      return res.json(service)
    }catch(err){
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }

  }
}
