import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepo: Repository<StudentEntity>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.save(createStudentDto);
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(mssv: string) {
    return this.studentRepo.findOneBy({
      mssv: mssv,
    });
  }

  findByMssv(mssv: string) {
    return this.studentRepo.findOneBy({
      mssv: mssv,
    });
  }

  findById(id: string) {
    return this.studentRepo.findOneBy({
      id,
    });
  }

  // update(id: number, updateStudentDto: UpdateStudentDto) {
  //   return `This action updates a #${id} student`;
  // }

  remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
