import { Injectable } from '@nestjs/common';
import { CreateTestScoreDto } from './dto/create-test-score.dto';
import { UpdateTestScoreDto } from './dto/update-test-score.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestScoreEntity } from './entities/test-score.entity';

@Injectable()
export class TestScoreService {
  constructor(
    @InjectRepository(TestScoreEntity)
    private readonly testScoreRepo: Repository<TestScoreEntity>,
  ) {}

  create(createTestScoreDto: CreateTestScoreDto) {
    return this.testScoreRepo.save(createTestScoreDto);
  }

  findAll() {
    return `This action returns all testScore`;
  }

  findOne(id: string) {
    return this.testScoreRepo.findOneBy({
      id: id,
    });
  }

  update(id: number, updateTestScoreDto: UpdateTestScoreDto) {
    return `This action updates a #${id} testScore`;
  }

  remove(id: number) {
    return `This action removes a #${id} testScore`;
  }
}
