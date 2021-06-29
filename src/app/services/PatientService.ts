import { getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import Patient from "../models/Patient";
import Plan from "../models/Plan";

interface IPatient {
  name: string,
  RG: string,
  CPF: string,
  email: string,
  phone: string,
  birthday: number,
  gender: string,
  plan: Plan
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
}

export default PatientService;
