import { Injectable } from '@nestjs/common';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestScoreReviewFormEntity } from './entities/test-score-review-form.entity';

@Injectable()
export class TestScoreReviewFormService {
  constructor(
    @InjectRepository(TestScoreReviewFormEntity)
    private readonly testScoreReviewFormRepo: Repository<TestScoreReviewFormEntity>,
  ) {}

  create(
    createTestScoreReviewFormDto: CreateTestScoreReviewFormDto,
    studentId: string,
  ) {
    return this.testScoreReviewFormRepo.save({
      ...createTestScoreReviewFormDto,
      tinhTrang: 'DA_GUI',
      student: {
        id: studentId,
      },
      testScore: {
        id: createTestScoreReviewFormDto.testScoreId,
      },
    });
  }

  findStudentForm(studentId: string) {
    return this.testScoreReviewFormRepo.find({
      where: {
        student: {
          id: studentId,
        },
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findUnresolvedForm() {
    return this.testScoreReviewFormRepo.find({
      where: {
        tinhTrang: 'DA_GUI',
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findResolvingForm() {
    return this.testScoreReviewFormRepo.find({
      where: {
        tinhTrang: 'DANG_XU_LI',
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findResolvedForm() {
    return this.testScoreReviewFormRepo.find({
      where: {
        tinhTrang: In(['TU_CHOI', 'DA_XU_LI']),
      },
      order: {
        ngayDangKy: 'ASC',
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

  async update(
    id: string,
    updateTestScoreReviewFormDto: UpdateTestScoreReviewFormDto,
  ) {
    const testScoreReviewForm = await this.testScoreReviewFormRepo.findOneBy({
      id,
    });

    Object.assign(testScoreReviewForm, updateTestScoreReviewFormDto);

    return this.testScoreReviewFormRepo.save(testScoreReviewForm);
  }

  async findByReviewBoard(reviewBoardId: string) {
    const results = await this.testScoreReviewFormRepo.find({
      where: {
        reviewResult: {
          reviewBoard: { id: reviewBoardId },
        },
      },
    });
    return results;
  }

  remove(id: number) {
    return `This action removes a #${id} testScoreReviewForm`;
  }
}
