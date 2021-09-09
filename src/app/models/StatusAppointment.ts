import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('statusProsthesis')
export default class StatusAppointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // @OneToMany(type => Prosthesis, prosthesis => prosthesis)
  // prosthesis: Prosthesis[]

  @CreateDateColumn({ default: () => 'now()' })
  readonly createdAt: Date;

  @UpdateDateColumn({ default: () => 'now()' })
  readonly updatedAt: Date;
}
