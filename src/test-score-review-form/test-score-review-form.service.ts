import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';
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

  async findLecturerForm(lecturerId: string) {
    const unresolved = await this.testScoreReviewFormRepo.find({
      where: {
        reviewResult: {
          reviewBoard: {
            lecturers: { id: lecturerId },
          },
        },
        tinhTrang: 'DANG_XU_LI',
      },
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
    const rest = await this.testScoreReviewFormRepo.find({
      where: {
        reviewResult: {
          reviewBoard: {
            lecturers: { id: lecturerId },
          },
        },
        tinhTrang: Not('DANG_XU_LI'),
      },
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
    return [...unresolved, ...rest];
  }

  async findStudentForm(studentId: string) {
    return this.testScoreReviewFormRepo.find({
      where: {
        student: {
          id: studentId,
        },
      },
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
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
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
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
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
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
      relations: {
        testScore: true,
        student: true,
        reviewResult: true,
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
    const testScoreReviewForm = await this.testScoreReviewFormRepo.findOne({
      where: { id },
      relations: { reviewResult: { reviewBoard: true } },
    });

    Object.assign(testScoreReviewForm, updateTestScoreReviewFormDto);

    return this.testScoreReviewFormRepo.save({
      ...testScoreReviewForm,
      reviewResult: {
        giaiTrinh: updateTestScoreReviewFormDto.giaiTrinh,
        diemPhucKhao: updateTestScoreReviewFormDto.diemPhucKhao,
        reviewBoard: {
          id: testScoreReviewForm.reviewResult.reviewBoard.id,
        },
      },
    });
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
