import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
  ) {}

  create(createEducationDto: CreateEducationDto): Promise<Education> {
    return this.educationRepository.save(createEducationDto);
  }

  findAll(): Promise<Education[]> {
    return this.educationRepository.find();
  }

  findOne(id: number): Promise<Education> {
    return this.educationRepository.findOne({ where: { id: id } });
  }

  update(
    id: number,
    updateEducationDto: UpdateEducationDto,
  ): Promise<Education> {
    return this.educationRepository
      .update({ id }, updateEducationDto)
      .then(() => {
        return this.educationRepository.findOne({ where: { id: id } });
      });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.educationRepository.delete({ id });
  }
}
