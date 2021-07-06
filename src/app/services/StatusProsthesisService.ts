import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import StatusProsthesis from '../models/StatusProsthesis';

export default class StatusProsthesisService {
  async index(){
    const repository = getRepository(StatusProsthesis);

    const statusProsthesis = await repository.find();

    return statusProsthesis
  }
  async create(name: string): Promise<StatusProsthesis> {
    const repository = getRepository(StatusProsthesis);

    const StatusProsthesisExists = await repository.findOne({ where: { name } });

    if(StatusProsthesisExists) throw new AppError('Status already exists');

    const statusProsthesis = repository.create({name});
    await repository.save(statusProsthesis);
    return statusProsthesis
  }
}
