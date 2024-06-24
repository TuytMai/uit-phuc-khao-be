import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestScoreDto } from './dto/create-test-score.dto';
import { UpdateTestScoreDto } from './dto/update-test-score.dto';
import { TestScoreEntity } from './entities/test-score.entity';

@Injectable()
export class TestScoreService {
  constructor(
    @InjectRepository(TestScoreEntity)
    private readonly testScoreRepo: Repository<TestScoreEntity>,
  ) {}

  create(createTestScoreDto: CreateTestScoreDto, studentId: string) {
    return this.testScoreRepo.save({
      ...createTestScoreDto,
      student: { id: studentId },
    });
  }

  findAll() {
    return `This action returns all testScore`;
  }

  findOne(id: string) {
    return this.testScoreRepo.findOneBy({
      id: id,
    });
  }

  findByStudentId(id: string) {
    return this.testScoreRepo.findBy({
      student: { id },
    });
  }

  update(id: number, updateTestScoreDto: UpdateTestScoreDto) {
    return `This action updates a #${id} testScore`;
  }

  remove(id: number) {
    return `This action removes a #${id} testScore`;
  }
}
