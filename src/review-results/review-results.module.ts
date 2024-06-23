import { Module } from '@nestjs/common';
import { ReviewResultsService } from './review-results.service';
import { ReviewResultsController } from './review-results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';
import { ReviewResultEntity } from './entities/review-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewResultEntity])],
  controllers: [ReviewResultsController],
  providers: [ReviewResultsService],
})
export class ReviewResultsModule {}
