import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import Clinic from './Clinic';
import Prosthesis from './Prosthesis';

@Entity('professional')
export default class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(type => Prosthesis, prosthesis => prosthesis)
  prosthesis: Prosthesis[];

  @JoinColumn({ name: 'clinic_id' })
  @ManyToOne(() => Clinic, clinic => clinic.professionals, { eager: true })
  clinic: Clinic;

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}
