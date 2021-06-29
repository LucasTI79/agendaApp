import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import Plan from '../models/Plan'
import PlanService from '../services/PlanService'

class PlanController {
  async index(req: Request, res: Response) {
    try{
      const plans = await new PlanService().findAll()

      return res.json({ plans })
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(400).json({ error: error.message })
    }
    // const repository = getRepository(Plan)
    // const plans = await repository.find()
    // return res.json({ plans })
  }

  async store(req: Request, res: Response){
    try{
      const { name } = req.body;

      const plan = await new PlanService().create(name)

      return res.json({ plan });
    }catch(err){
      console.log('err',err)
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async show(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const plan = await getRepository(Plan).findOne(id)

      return res.json({ plan })
    }catch(err){
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }

  }
}

export default PlanController;
