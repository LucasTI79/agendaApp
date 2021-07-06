import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import Lab from './Lab';
import Prosthesis from './Prosthesis';

@Entity('services')
export default class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @JoinColumn({ name: 'lab_id' })
  @ManyToOne(() => Lab, lab => lab.services, { eager: true })
  lab: Lab

  @OneToMany(type => Prosthesis, prosthesis => prosthesis)
  prosthesis: Prosthesis[]

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}
