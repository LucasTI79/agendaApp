import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'

import Patient from '../models/Patient'
import PatientService from '../services/PatientService'

export default class PatientController {
  async index(req: Request, res: Response) {
    const patientRepository = getRepository(Patient)
    const patients = await patientRepository.find({ relations:["plan"]})
    return res.json(patients)
  }

  async create(req: Request, res: Response) {
    try{
      const { name, RG, CPF, email, phone, birthday, gender, plan } = req.body
      const patient = await new PatientService().create({ name, RG, CPF, email, phone, birthday, gender, plan })
      return res.json({patient})
    }catch(err){
      let error = err as IError;
      console.log('err', err)
      return res.status(error.statusCode).json({ error: error.message })
    }
  }

  async show(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const professional = await getRepository(Patient).findOne({id})

      return res.json({professional})
    }catch(err){
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response){
    try{
      const { name, RG, CPF, email, phone, birthday, gender, plan } = req.body
      const { id } = req.params as { id: string };
      const prosthesis = await new PatientService().update(id, name, RG, CPF, email, phone, birthday, gender, plan);

      return res.json(prosthesis)
    }catch(err){
     let error = err as IError;
     res.status(error.statusCode).json({ error: error.message })
    }
  }

  async delete(req: Request, res: Response) {
    try{
      const { id } = req.params;
      await new PatientService().delete(id)
      return res.status(204).send()
    }catch(err){
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }

  async search(req: Request, res: Response){
    try{
      const { q } = req.query
      //@ts-ignore
      const patients = await new PatientService().search(q)
      return res.json(patients)
    }catch(err){
      let error = err as IError
      console.log('error',error)
      res.status(error.statusCode).json({ error: error.message })
    }
  }
}
