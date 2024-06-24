import { Injectable } from '@nestjs/common';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestScoreReviewFormEntity } from './entities/test-score-review-form.entity';

@Injectable()
export class TestScoreReviewFormService {
  constructor(
    @InjectRepository(TestScoreReviewFormEntity)
    private readonly testScoreReviewFormRepo: Repository<TestScoreReviewFormEntity>,
  ) {}

  create(createTestScoreReviewFormDto: CreateTestScoreReviewFormDto) {
    return this.testScoreReviewFormRepo.save(createTestScoreReviewFormDto);
  }

  findStudentForm(studentId: string) {
    return this.testScoreReviewFormRepo.findBy({
      student: {
        id: studentId,
      },
    });
  }

  findAll() {
    return `This action returns all testScoreReviewForm`;
  }

  findOne(id: string) {
    return this.testScoreReviewFormRepo.findOneBy({
      id: id,
    });
  }

  update(
    id: number,
    updateTestScoreReviewFormDto: UpdateTestScoreReviewFormDto,
  ) {
    return `This action updates a #${id} testScoreReviewForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} testScoreReviewForm`;
  }
}
