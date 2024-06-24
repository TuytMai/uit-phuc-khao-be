import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturerModule } from 'src/lecturer/lecturer.module';
import { ReviewBoardEntity } from './entities/review-board.entity';
import { ReviewBoardController } from './review-board.controller';
import { ReviewBoardService } from './review-board.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewBoardEntity]), LecturerModule],
  controllers: [ReviewBoardController],
  providers: [ReviewBoardService],
  exports: [ReviewBoardService],
})
export class ReviewBoardModule {}
