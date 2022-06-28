import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Resume } from '../../resume/entities/resume.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  dateStart: string;

  @Column({ type: 'datetime', nullable: true })
  dateEnd: string;

  @Column('text')
  title: string;

  @Column('text')
  company: string;

  @Column('text')
  city: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  tags: Array<string>;

  @Exclude()
  @ManyToOne(() => Resume, (resume) => resume.works)
  resume: Resume;
}
