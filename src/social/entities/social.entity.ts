import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Resume } from '../../resume/entities/resume.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Social {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  url: string;

  @Exclude()
  @ManyToOne(() => Resume, (resume) => resume.socials)
  resume: Resume;
}
