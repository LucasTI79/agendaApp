import Prosthesis from '../models/Prosthesis';
import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Professional from '../models/Professional';
import Service from '../models/Service';
import Lab from '../models/Lab';
import StatusProsthesis from '../models/StatusProsthesis';
import Patient from '../models/Patient';
import ProsthesisLog from '../models/ProsthesisLog';

interface ProsthesisInterface {
  isbn: string,
  patient: Patient,
  professional: Professional,
  service: Service,
  lab: Lab,
  status: StatusProsthesis,
  box: number,
  region: string,
  DeliveryDate: Date
}
export default class ProsthesisService {
  async index(){
    const repository = getRepository(Prosthesis);

    const prosthesis = await repository.find()

    return prosthesis
  }
  async create(data: ProsthesisInterface): Promise<Prosthesis> {
    const repository = getRepository(Prosthesis);
    const repositoryLog = getRepository(ProsthesisLog);

    const prosthesisExists = await repository.findOne({ where: { isbn: data.isbn } });

    if(prosthesisExists) throw new AppError('Prosthesis isbn already exists');

    const prosthesis = repository.create(data);
    const prosthesisLog = repositoryLog.create(data);

    await repository.save(prosthesis);
    await repositoryLog.save(prosthesisLog);
    return prosthesis
  }

  async update(data: ProsthesisInterface): Promise<number | undefined > {
    const repository = getRepository(Prosthesis);
    const repositoryLog = getRepository(ProsthesisLog);

    const prosthesis = await repository.update({ isbn: data.isbn }, { patient: data.patient, lab: data.lab, professional: data.professional, service: data.service, status: data.status });

    if(prosthesis.affected === 0) throw new AppError('Prosthesis update error');

    const prosthesisLog = repositoryLog.create(data);
    await repositoryLog.save(prosthesisLog);

    return prosthesis.affected
  }

  async show(isbn: string){
    const repository = getRepository(Prosthesis);

    const prosthesis = await repository.findOne({ isbn })

    // const prosthesis = await repository.find({ where: { isbn }, join: {
    //   alias: "prosthesis",
    //   leftJoinAndSelect: {
    //     patient: "prosthesis.patient",
    //     lab: "prosthesis.lab",
    //     status: "prosthesis.status",
    //     professional: "prosthesis.professional",
    //     service: "prosthesis.service"
    //   }
    // } })

    if(!prosthesis) throw new AppError('Prosthesis show error');

    return prosthesis
  }

  async delete(isbn: string){
    const repository = getRepository(Prosthesis);

    const prosthesisExists = await repository.find({ where: { isbn } });

    if(!prosthesisExists) throw new AppError('Prosthesis not exists');

    return await repository.delete({ isbn })
  }

  async logs(){
    const repository = getRepository(ProsthesisLog);
     return repository.find();
  }


}
