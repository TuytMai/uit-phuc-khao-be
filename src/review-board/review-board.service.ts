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
      lecturers: await Promise.all(
        createReviewBoardDto.lecturerIds.map((id) =>
          this.lecturerService.findOne(id),
        ),
      ),
    };

    return this.reviewBoardRepo.save(reviewBoardEntity);
  }

  findAll() {
    return `This action returns all reviewBoard`;
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
      relations: { lecturers: true },
    });

    const lecturer = await this.lecturerService.findOne(lecturerId);

    reviewBoard.lecturers.push(lecturer);

    return this.reviewBoardRepo.save(reviewBoard);
  }

  update(id: number, updateReviewBoardDto: UpdateReviewBoardDto) {
    return `This action updates a #${id} reviewBoard`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewBoard`;
  }
}
