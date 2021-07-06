import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'

import Lab from '../models/Lab'
import LabService from '../services/LabService';

export default class LabController {
  async index(req: Request, res: Response) {
    const labRepository = getRepository(Lab)
    const labs = await labRepository.find()
    return res.json(labs)
  }

  async create(req: Request, res: Response) {
    try{
      const { name } = req.body
      const lab = await new LabService().create( name )
      return res.json(lab)
    }catch(err){
      let error = err as IError;
      console.log('err', err)
      return res.status(error.statusCode).json({ error: error.message })
    }
  }
}
