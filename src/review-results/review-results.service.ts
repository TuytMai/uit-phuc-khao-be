import { Injectable } from '@nestjs/common';
import { CreateReviewResultDto } from './dto/create-review-result.dto';
import { UpdateReviewResultDto } from './dto/update-review-result.dto';
import { Repository } from 'typeorm';
import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewResultEntity } from './entities/review-result.entity';

@Injectable()
export class ReviewResultsService {
  constructor(
    @InjectRepository(ReviewResultEntity)
    private readonly reviewResultrepo: Repository<ReviewResultEntity>) {}

  create(createReviewResultDto: CreateReviewResultDto) {
    return this.reviewResultrepo.save(createReviewResultDto);
  }

  findAll() {
    return `This action returns all reviewResults`;
  }

  findOne(id: string) {
    return this.reviewResultrepo.findOneBy({
      id: id,
    });
  }

  update(id: number, updateReviewResultDto: UpdateReviewResultDto) {
    return `This action updates a #${id} reviewResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewResult`;
  }
}
