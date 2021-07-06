import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import Plan from "./Plan";
import Prosthesis from "./Prosthesis";

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
  @ManyToOne(() => Plan, plan => plan.patients, { eager: true })
  plan: Plan

  @OneToMany(() => Prosthesis, prosthesis => prosthesis)
  prosthesis: Prosthesis[];

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;

}

export default Patient
