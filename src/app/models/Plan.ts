import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Patient from "./Patient";

@Entity('plans')
class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  active?: boolean;

  @OneToMany(() => Patient, patient => patient.plan)
  patients: Patient[];

  constructor() {
    if (!this.active) {
      this.active = true
    }
  }

}

export default Plan