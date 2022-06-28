import { Injectable } from '@nestjs/common';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Information } from './entities/information.entity';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepository: Repository<Information>,
  ) {}

  create(createInformationDto: CreateInformationDto) {
    return this.informationRepository.save(createInformationDto);
  }

  findAll() {
    return this.informationRepository.find();
  }

  findOne(id: number) {
    return this.informationRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateInformationDto: UpdateInformationDto) {
    return this.informationRepository
      .update({ id }, updateInformationDto)
      .then(() => {
        return this.informationRepository.findOne({ where: { id: id } });
      });
  }

  remove(id: number) {
    return this.informationRepository.delete({ id });
  }
}
