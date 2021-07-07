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

    const serviceExists = await repository.findOne({ where: { name, lab } });

    if(serviceExists) throw new AppError('Service already exists');

    const service = repository.create({ name, lab });
    await repository.save(service);
    return service
  }
  async update(id: string, name: string, lab: Lab ): Promise<number | undefined > {
    const repository = getRepository(Service);

    const labExists = await repository.findOne({ where: { id } });

    if(!labExists) throw new AppError('Service not exists');

    const labdata = await repository.update(id , { name } );

    if(labdata.affected === 0) throw new AppError('Service update error');

    return labdata.affected
  }
}
