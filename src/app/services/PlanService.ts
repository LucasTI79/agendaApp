import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Plan from '../models/Plan'
class PlanService {
  async create(name: string): Promise<Plan> {
    const repository = getRepository(Plan);

    const planExists = await repository.findOne({ where: { name } });

    if(planExists) throw new AppError('Plan already exists');

    const plan = repository.create({ name });
    await repository.save(plan);
    return plan
  }
  async findAll(){
    const repository = getRepository(Plan);

    const plans = await repository.find();

    return plans
  }
}

export default PlanService;
