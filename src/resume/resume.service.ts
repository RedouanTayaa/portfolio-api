import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './entities/resume.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resumeRepository: Repository<Resume>,
  ) {}

  create(createResumeDto: CreateResumeDto) {
    return this.resumeRepository.save(createResumeDto);
  }

  findAll() {
    return this.resumeRepository.find();
  }

  findOne(id: number) {
    return this.resumeRepository.findOne({
      where: { id: id },
      relations: ['information', 'educations', 'works', 'skills', 'socials'],
    });
  }

  update(id: number, updateResumeDto: UpdateResumeDto) {
    return this.resumeRepository.update({ id }, updateResumeDto).then(() => {
      return this.resumeRepository.findOne({
        where: { id: id },
        relations: ['information', 'educations', 'works', 'skills', 'socials'],
      });
    });
  }

  remove(id: number) {
    return this.resumeRepository.delete({ id });
  }
}
