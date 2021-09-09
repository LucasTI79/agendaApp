import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import StatusAppointment from '../models/StatusAppointment'
import StatusAppointmentService from '../services/StatusAppointmentService'

export default class ProfessionalController {
  async index(req: Request, res: Response) {
    try {
      const status = await new StatusAppointmentService().index()

      return res.json(status)
    } catch (err) {
      console.log('err', err)
      let error = err as IError
      res.status(400).json({ error: error.message })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const status = await new StatusAppointmentService().create(name)

      return res.json(status);
    } catch (err) {
      console.log('err', err)
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const status = await getRepository(StatusAppointment).findOne({ id })

      return res.json(status)
    } catch (err) {
      let error = err as IError
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { name } = req.body
      const { id } = req.params as { id: string };
      const status = await new StatusAppointmentService().update(name, id);

      res.json({ status })
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      await new StatusAppointmentService().delete(id);
      return res.status(204).send()
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
}
