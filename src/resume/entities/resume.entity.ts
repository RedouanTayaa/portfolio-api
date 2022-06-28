import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  Column,
} from 'typeorm';
import { Information } from '../../information/entities/information.entity';
import { Education } from '../../education/entities/education.entity';
import { Work } from '../../work/entities/work.entity';
import { Skill } from '../../skill/entities/skill.entity';
import { Social } from '../../social/entities/social.entity';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @OneToOne(() => Information, (information) => information.resume, {
    cascade: true,
  })
  @JoinColumn()
  information: Information;

  @OneToMany(() => Education, (education) => education.resume, {
    cascade: true,
  })
  educations: Education[];

  @OneToMany(() => Work, (work) => work.resume, {
    cascade: true,
  })
  works: Work[];

  @OneToMany(() => Skill, (skill) => skill.resume, {
    cascade: true,
  })
  skills: Skill[];

  @OneToMany(() => Social, (social) => social.resume, {
    cascade: true,
  })
  socials: Social[];
}
