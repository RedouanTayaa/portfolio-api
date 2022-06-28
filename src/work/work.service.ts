import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  create(createWorkDto: CreateWorkDto): Promise<Work> {
    return this.workRepository.save(createWorkDto);
  }

  findAll() {
    return this.workRepository.find();
  }

  findOne(id: number) {
    return this.workRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return this.workRepository.update({ id }, updateWorkDto).then(() => {
      return this.workRepository.findOne({ where: { id: id } });
    });
  }

  remove(id: number) {
    return this.workRepository.delete({ id });
  }
}
