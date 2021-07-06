import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'

import Patient from '../models/Patient'
import PatientService from '../services/PatientService'

class PatientController {
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
}

export default PatientController;
