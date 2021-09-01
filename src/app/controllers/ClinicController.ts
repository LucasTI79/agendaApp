import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import Clinic from '../models/Clinic'
import ClinicService from '../services/ClinicService'

export default class ClinicController {
  async index(req: Request, res: Response) {
    try {
      const clinics = await new ClinicService().index()

      return res.json(clinics)
    } catch (err) {
      console.log('err', err)
      let error = err as IError
      res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, CNPJ } = req.body;

      const clinic = await new ClinicService().create(name)

      return res.json(clinic);
    } catch (err) {
      console.log('err', err)
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const clinic = await getRepository(Clinic).findOne({ id })

      return res.json(clinic)
    } catch (err) {
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { name, CNPJ } = req.body
      const { id } = req.params as { id: string };
      const clinic = await new ClinicService().update(id, name);

      res.json({ clinic })
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      await new ClinicService().delete(id);
      return res.status(204).send()
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
}
