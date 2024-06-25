import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturerService } from 'src/lecturer/lecturer.service';
import { Repository } from 'typeorm';
import { CreateReviewBoardDto } from './dto/create-review-board.dto';
import { UpdateReviewBoardDto } from './dto/update-review-board.dto';
import { ReviewBoardEntity } from './entities/review-board.entity';

@Injectable()
export class ReviewBoardService {
  constructor(
    @InjectRepository(ReviewBoardEntity)
    private readonly reviewBoardRepo: Repository<ReviewBoardEntity>,
    private readonly lecturerService: LecturerService,
  ) {}

  async create(createReviewBoardDto: CreateReviewBoardDto) {
    const reviewBoardEntity = {
      ...createReviewBoardDto,
      lecturers: createReviewBoardDto.lecturerIds.map((id) => ({ id })),
    };

    return this.reviewBoardRepo.save(reviewBoardEntity);
  }

  findAll() {
    return this.reviewBoardRepo.find({
      where: {},
      relations: {
        lecturers: true,
        reviewResults: {
          testScoreReviewForm: {
            student: true,
            testScore: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.reviewBoardRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        lecturers: true,
      },
    });
  }

  async addLecturer(reviewBoardId: string, lecturerId: string) {
    const reviewBoard = await this.reviewBoardRepo.findOne({
      where: { id: reviewBoardId },
      relations: {
        lecturers: true,
        reviewResults: {
          testScoreReviewForm: true,
        },
      },
    });

    const lecturer = await this.lecturerService.findOne(lecturerId);

    reviewBoard.lecturers.push(lecturer);

    return this.reviewBoardRepo.save(reviewBoard);
  }

  async update(id: string, updateReviewBoardDto: UpdateReviewBoardDto) {
    const reviewBoard = await this.reviewBoardRepo.findOne({
      where: { id },
      relations: { lecturers: true },
    });
    Object.assign(reviewBoard, updateReviewBoardDto);

    return this.reviewBoardRepo.save({
      ...reviewBoard,
      lecturers:
        (updateReviewBoardDto.lecturerIds?.length || 0) !== 0
          ? updateReviewBoardDto.lecturerIds.map((id) => ({
              id,
            }))
          : reviewBoard.lecturers,
      reviewResults: updateReviewBoardDto.scoreReviewIds.map((id) => ({
        testScoreReviewForm: { id },
      })),
    });
  }

  remove(id: string) {
    return this.reviewBoardRepo.delete(id);
  }
}
