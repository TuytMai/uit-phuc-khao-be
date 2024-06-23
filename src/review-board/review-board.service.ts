import { Injectable } from '@nestjs/common';
import { CreateReviewBoardDto } from './dto/create-review-board.dto';
import { UpdateReviewBoardDto } from './dto/update-review-board.dto';
import { Repository } from 'typeorm';
import { ReviewBoardEntity } from './entities/review-board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturerService } from 'src/lecturer/lecturer.service';

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
    return this.reviewBoardRepo.findOneBy({
      id: id,
    });
  }

  update(id: number, updateReviewBoardDto: UpdateReviewBoardDto) {
    return `This action updates a #${id} reviewBoard`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewBoard`;
  }
}
