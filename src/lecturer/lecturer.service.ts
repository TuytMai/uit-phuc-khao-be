import { Injectable } from '@nestjs/common';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { Repository } from 'typeorm';
import { LecturerEntity } from './entities/lecturer.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
      order: {
        hoTen: 'ASC',
      },
    });
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
