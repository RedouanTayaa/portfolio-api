import { Information } from '../../information/entities/information.entity';
import { Education } from '../../education/entities/education.entity';
import { Work } from '../../work/entities/work.entity';
import { Skill } from '../../skill/entities/skill.entity';
import { Social } from '../../social/entities/social.entity';

export class CreateResumeDto {
  information: Information;
  educations: Education[];
  works: Work[];
  skills: Skill[];
  socials: Social[];
}
