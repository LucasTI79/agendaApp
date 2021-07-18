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

  async update(name: string, id: string): Promise<number | undefined > {
    const repository = getRepository(Professional);

    const professionalExists = await repository.findOne({ where: { id } });

    if(!professionalExists) throw new AppError('Professional not exists');

    const professional = await repository.update({id} , { name });

    if(professional.affected === 0) throw new AppError('Professional update error');

    return professional.affected
  }

  async delete(id: string) {
    const repository = getRepository(Professional);

    const professionalExists = await repository.findOne({ where: { id } });

    if(!professionalExists) throw new AppError('Professional not exists');

    return await repository.delete({id});
  }
}
