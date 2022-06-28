import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Resume } from '../../resume/entities/resume.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  icon: string;

  @Exclude()
  @ManyToOne(() => Resume, (resume) => resume.skills)
  resume: Resume;
}
