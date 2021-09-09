import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import StatusAppointment from '../models/StatusAppointment';

export default class StatusAppointmentService {
  async index() {
    const repository = getRepository(StatusAppointment);

    const statusProsthesis = await repository.find();

    return statusProsthesis
  }
  async create(name: string): Promise<StatusAppointment> {
    const repository = getRepository(StatusAppointment);

    const StatusProsthesisExists = await repository.findOne({ where: { name } });

    if (StatusProsthesisExists) throw new AppError('Status already exists');

    const statusProsthesis = repository.create({ name });
    await repository.save(statusProsthesis);
    return statusProsthesis
  }
  async update(name: string, id: string): Promise<number | undefined> {
    const repository = getRepository(StatusAppointment);

    const statusExists = await repository.findOne({ where: { id } });

    if (!statusExists) throw new AppError('Status not exists');

    const status = await repository.update({ id }, { name });

    if (status.affected === 0) throw new AppError('Status update error');

    return status.affected
  }

  async delete(id: string) {
    const repository = getRepository(StatusAppointment);

    const statusExists = await repository.findOne({ where: { id } });

    if (!statusExists) throw new AppError('Status not exists');

    return await repository.delete({ id });

  }
}
