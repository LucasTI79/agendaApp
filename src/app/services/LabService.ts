import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Lab from '../models/Lab';

export default class LabService {
  async index() {
    const repository = getRepository(Lab);

    const labs = await repository.find();

    return labs;
  }
  async create(name: string): Promise<Lab> {
    const repository = getRepository(Lab);

    const labExists = await repository.findOne({ where: { name } });

    if (labExists) throw new AppError('Lab already exists');

    const lab = repository.create({ name });
    await repository.save(lab);
    return lab;
  }
  async update(id: string, name: string): Promise<number | undefined> {
    const repository = getRepository(Lab);

    const labExists = await repository.findOne({ where: { id } });

    if (!labExists) throw new AppError('Lab not exists');

    const lab = await repository.update(id, { name });

    if (lab.affected === 0) throw new AppError('Lab update error');

    return lab.affected;
  }
  async delete(id: string) {
    const repository = getRepository(Lab);

    const labExists = await repository.findOne({ where: { id } });

    if (!labExists) throw new AppError('Lab not exists');

    return await repository.delete({ id });
  }
}
