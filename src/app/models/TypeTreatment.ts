import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Appointment from "./Appointments";

@Entity('typetreatment')
export default class TypeTreatment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Appointment, appointment => appointment)
  appointment: Appointment[];

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;

}
