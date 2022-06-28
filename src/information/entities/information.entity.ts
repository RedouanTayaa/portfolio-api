import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Resume } from '../../resume/entities/resume.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  lastname: string;

  @Column('text')
  firstname: string;

  @Column('text')
  phone: string;

  @Column('text')
  email: string;

  @Column('text')
  summary: string;

  @Exclude()
  @OneToOne(() => Resume, (resume) => resume.information)
  resume: Resume;
}
