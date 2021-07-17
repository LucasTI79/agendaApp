import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Lab from './Lab';
import Patient from './Patient';
import Professional from './Professional';
import Service from './Service';
import StatusProsthesis from './StatusProsthesis';

@Entity('prosthesis')
export default class Prosthesis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isbn: string;

  @JoinColumn({ name: 'patient_id' })
  @ManyToOne(type => Patient, patient => patient.prosthesis, { eager: true })
  patient: Patient;

  @JoinColumn({ name: 'service_id' })
  @ManyToOne(type => Service, service => service.prosthesis, { eager: true })
  service: Service;

  @JoinColumn({ name: 'professional_id' })
  @ManyToOne(type => Professional, professional => professional.prosthesis, { eager: true })
  professional: Professional;

  @JoinColumn({ name: 'lab_id' })
  @ManyToOne(type => Lab, lab => lab.prosthesis, { eager: true })
  lab: Lab;

  @JoinColumn({ name: 'status_id' })
  @ManyToOne(type => StatusProsthesis, status => status.prosthesis, { eager: true })
  status: StatusProsthesis;

  @Column()
  box: number;

  @Column()
  region: string;

  @Column({
    type: 'timestamptz',
    nullable: true
  })
  DeliveryDate: Date;

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}

