import { getRepository, ILike } from "typeorm";
import { AppError } from "../errors/AppError";
import Patient from "../models/Patient";
import Plan from "../models/Plan";

interface IPatient {
  name: string,
  RG: string,
  CPF: string,
  email: string,
  phone: string,
  birthday: Date,
  gender: string,
  plan?: Plan
}
class PatientService {
  async create(data: IPatient){

    const repository = getRepository(Patient);

    const patientExists = await repository.findOne({ where: { CPF: data.CPF } });

    if(patientExists) throw new AppError('Patient already exists');

    const patient = repository.create(data);
    await repository.save(patient);
    return patient
  }
  async update( id: string, name: string, RG: string, CPF: string, email: string, phone: string, birthday: string, gender: string, plan: Plan): Promise<number | undefined > {
    const repository = getRepository(Patient);

    const patientExists = await repository.findOne({ where: { id } });

    if(!patientExists) throw new AppError('Patient not exists');

    const patient = await repository.update(id , { name, RG, CPF, email, phone, birthday, gender } );

    if(patient.affected === 0) throw new AppError('Patient update error');

    return patient.affected
  }

  async delete( id: string) {
    const repository = getRepository(Patient);

    const patientExists = await repository.findOne({ where: { id } });

    if(!patientExists) throw new AppError('Patient not exists');

    return await repository.delete(id);

  }

  async search(q: string = ''){
    const repository = getRepository(Patient);
    const patients = await repository.find({ name: ILike(`%${q}%`) });
    return patients
  }
}

export default PatientService;
