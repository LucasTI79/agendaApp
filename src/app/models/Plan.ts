import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Patient from "./Patient";

@Entity('plans')
export default class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  active?: boolean;

  @Column()
  defaultPlan?: boolean;

  @OneToMany(() => Patient, patient => patient)
  patients: Patient[];

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;

  constructor() {
    if (!this.active) {
      this.active = true
    }
  }

}
