import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Lab from '../models/Lab';
import Service from '../models/Service';

export default class ServicesService {
  async index(){
    const repository = getRepository(Service);

    const service = await repository.find({ relations: ["lab"] });
    return service
  }
  async create(name: string, lab: Lab): Promise<Service> {
    const repository = getRepository(Service);

    const serviceExists = await repository.findOne({ where: { name } });

    if(serviceExists) throw new AppError('Service already exists');

    const service = repository.create({ name, lab });
    await repository.save(service);
    return service
  }
}
