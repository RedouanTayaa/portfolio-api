import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Resume } from '../../resume/entities/resume.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  year: number;

  @Column('text')
  title: string;

  @Column('text')
  city: string;

  @Column('text')
  organization: string;

  @Exclude()
  @ManyToOne(() => Resume, (resume) => resume.educations)
  resume: Resume;
}
