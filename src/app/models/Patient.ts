import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
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

  @Column({
    type: 'date',
    nullable: true
  })
  birthday: Date;

  @Column()
  gender: string;

  @JoinColumn({ name: 'plan_id' })
  @ManyToOne(() => Plan, plan => plan.id)
  plan: Plan

  @CreateDateColumn({ default: () => 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  updatedAt: Date;

}

export default Patient
