import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { IError } from '../errors/AppError'
import StatusProsthesis from '../models/StatusProsthesis'
import StatusProsthesisService from '../services/StatusProsthesisService'

export default class ProfessionalController {
  async index(req: Request, res: Response) {
    try {
      const status = await new StatusProsthesisService().index()

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

      const status = await new StatusProsthesisService().create(name)

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

      const status = await getRepository(StatusProsthesis).findOne({ id })

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
      const status = await new StatusProsthesisService().update(name, id);

      res.json({ status })
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      await new StatusProsthesisService().delete(id);
      return res.status(204).send()
    } catch (err) {
      let error = err as IError;
      res.status(error.statusCode).json({ error: error.message })
    }
  }
}
