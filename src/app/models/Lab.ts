import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import Prosthesis from './Prosthesis';
import Service from './Service';

@Entity('labs')
export default class Lab {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Service, service => service)
  services: Service[];

  @OneToMany(type => Prosthesis, prosthesis => prosthesis)
  prosthesis: Prosthesis[]

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}
