import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Lab from '../models/Lab';

export default class LabService {
  async index(){
    const repository = getRepository(Lab);

    const labs = await repository.find();

    return labs
  }
  async create(name: string): Promise<Lab> {
    const repository = getRepository(Lab);

    const labExists = await repository.findOne({ where: { name } });

    if(labExists) throw new AppError('Lab already exists');

    const lab = repository.create({ name });
    await repository.save(lab);
    return lab
  }
}
