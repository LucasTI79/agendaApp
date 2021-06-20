import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Patient from '../models/Patient'

class PatientController {
  async index(req: Request, res: Response) {
    const patientRepository = getRepository(Patient)
    const patients = await patientRepository.find()
    return res.json({ patients })
  }
}

export default PatientController;
