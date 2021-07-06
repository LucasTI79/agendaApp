import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Professional from '../models/Professional';

export default class ProfessionalService {
  async index(){
    const repository = getRepository(Professional);

    const professional = await repository.find();

    return professional
  }
  async create(name: string): Promise<Professional> {
    const repository = getRepository(Professional);

    const professionalExists = await repository.findOne({ where: { name } });

    if(professionalExists) throw new AppError('Professional already exists');

    const professional = repository.create({ name });
    await repository.save(professional);
    return professional
  }
}
