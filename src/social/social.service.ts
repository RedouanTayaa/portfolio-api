import { Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Social } from './entities/social.entity';

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
  ) {}

  create(createSocialDto: CreateSocialDto) {
    return this.socialRepository.save(createSocialDto);
  }

  findAll() {
    return this.socialRepository.find();
  }

  findOne(id: number) {
    return this.socialRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateSocialDto: UpdateSocialDto) {
    return this.socialRepository.update({ id }, updateSocialDto).then(() => {
      return this.socialRepository.findOne({ where: { id: id } });
    });
  }

  remove(id: number) {
    return this.socialRepository.delete({ id });
  }
}
