import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Patient from "./Patient";

@Entity('plans')
class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Patient, patient => patient.plan)
  patients: Patient[];

}

export default Plan