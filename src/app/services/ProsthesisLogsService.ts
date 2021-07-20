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

export default class ProsthesisLogsService {
  async index(){
    const repository = getRepository(ProsthesisLog);
     return repository.find();
  }


  async showByIsbn(isbn: string){
    const repository = getRepository(ProsthesisLog);

    const prosthesis = await repository.find({ isbn })

    if(!prosthesis) throw new AppError('Prosthesis show error');

    return prosthesis
  }

  async showByStatus(statusName: string){
    const repository = getRepository(ProsthesisLog);

    const statusRepostory = getRepository(StatusProsthesis);

    const status = await statusRepostory.findOne({ where: { name: statusName } })

    const prosthesis = await repository.find({ status })

    if(!prosthesis) throw new AppError('Prosthesis show error');

    return prosthesis
  }

}
