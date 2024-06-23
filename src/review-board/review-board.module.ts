import { Module } from '@nestjs/common';
import { ReviewBoardService } from './review-board.service';
import { ReviewBoardController } from './review-board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewBoardEntity } from './entities/review-board.entity';
import { LecturerModule } from 'src/lecturer/lecturer.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewBoardEntity]), LecturerModule],
  controllers: [ReviewBoardController],
  providers: [ReviewBoardService],
})
export class ReviewBoardModule {}
