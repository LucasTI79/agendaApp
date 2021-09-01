import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Clinic from '../models/Clinic';

export default class ClinicService {
  async index() {
    const repository = getRepository(Clinic);

    const clinics = await repository.find();

    return clinics;
  }
  async create(name: string, CNPJ?: string): Promise<Clinic> {
    const repository = getRepository(Clinic);

    const clinicExists = await repository.findOne({ where: { name } });

    if (clinicExists) throw new AppError('Clinic already exists');

    const clinic = repository.create({ name });
    await repository.save(clinic);
    return clinic;
  }
  async update(id: string, name: string, CNPJ?: string): Promise<number | undefined> {
    const repository = getRepository(Clinic);

    const clinicExists = await repository.findOne({ where: { id } });

    if (!clinicExists) throw new AppError('Clinic not exists');

    const clinic = await repository.update(id, { name });

    if (clinic.affected === 0) throw new AppError('Clinic update error');

    return clinic.affected;
  }
  async delete(id: string) {
    const repository = getRepository(Clinic);

    const clinicExists = await repository.findOne({ where: { id } });

    if (!clinicExists) throw new AppError('Clinic not exists');

    return await repository.delete({ id });
  }
}
