import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { LecturerEntity } from './entities/lecturer.entity';

@Injectable()
export class LecturerService {
  constructor(
    @InjectRepository(LecturerEntity)
    private readonly lecturerRepo: Repository<LecturerEntity>,
  ) {}

  create(createLecturerDto: CreateLecturerDto) {
    return this.lecturerRepo.save(createLecturerDto);
  }

  findAll() {
    return `This action returns all lecturer`;
  }

  findOne(id: string) {
    return this.lecturerRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  findByUsername(username: string) {
    return this.lecturerRepo.findOneBy({
      username,
    });
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
