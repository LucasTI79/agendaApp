import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import Patient from './Patient';
import Professional from './Professional';
import TypeTreatment from './TypeTreatment';

@Entity('appointment')
export default class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  duration: number;

  @Column({
    type: 'timestamptz',
    nullable: true
  })
  date: Date;

  @JoinColumn({ name: 'professional_id' })
  @ManyToOne(() => Professional, professional => professional.appointment, { eager: true })
  professional: Professional;

  @JoinColumn({ name: 'patient_id' })
  @ManyToOne(() => Patient, patient => patient.appointment, { eager: true })
  patient: Patient

  @JoinColumn({ name: 'type_id' })
  @ManyToOne(() => TypeTreatment, typeTreatment => typeTreatment.appointment, { eager: true })
  type: TypeTreatment;

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}
