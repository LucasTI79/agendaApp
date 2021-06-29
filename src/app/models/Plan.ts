import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Patient from "./Patient";

@Entity('plans')
class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  active?: boolean;

  @Column()
  default?: boolean;

  @OneToMany(() => Patient, patient => patient.plan)
  patients: Patient[];

  @CreateDateColumn({ default: () => 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  updatedAt: Date;

  constructor() {
    if (!this.active) {
      this.active = true
    }
  }

}

export default Plan
