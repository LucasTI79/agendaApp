import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Plan from "./Plan";

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  RG: string;

  @Column()
  CPF: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

  @ManyToOne(() => Plan, plan => plan.patients)
  plan: Plan

}

export default Patient
