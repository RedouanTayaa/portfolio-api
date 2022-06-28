import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,
  ) {}

  create(createSkillDto: CreateSkillDto) {
    return this.skillRepository.save(createSkillDto);
  }

  findAll() {
    return this.skillRepository.find();
  }

  findOne(id: number) {
    return this.skillRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.skillRepository.update({ id }, updateSkillDto).then(() => {
      return this.skillRepository.findOne({ where: { id: id } });
    });
  }

  remove(id: number) {
    return this.skillRepository.delete({ id });
  }
}
