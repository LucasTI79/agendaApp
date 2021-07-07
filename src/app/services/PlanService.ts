import { getRepository } from 'typeorm'
import { AppError } from '../errors/AppError';
import Plan from '../models/Plan'

interface IPlan {
  id: string,
  name: string,
  active?: boolean,
  defaultPlan: boolean
}
class PlanService {
  async index(){
    const repository = getRepository(Plan);

    const plans = await repository.find();

    return plans
  }
  async create(name: string, active: boolean = true, defaultPlan: boolean = false): Promise<Plan> {
    const repository = getRepository(Plan);

    const planExists = await repository.findOne({ where: { name } });

    if(planExists) throw new AppError('Plan already exists');

    const plan = repository.create({ name, active, defaultPlan });
    await repository.save(plan);
    return plan
  }
  async update(id: string, name: string, active: boolean = true, defaultPlan: boolean = false ): Promise<number | undefined > {
    const repository = getRepository(Plan);

    const planExists = await repository.findOne({ where: { id } });

    if(!planExists) throw new AppError('Plan not exists');

    const plan = await repository.update(id , { name, active, defaultPlan } );

    if(plan.affected === 0) throw new AppError('Plan update error');

    return plan.affected
  }
}

export default PlanService;
