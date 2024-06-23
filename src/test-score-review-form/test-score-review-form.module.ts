import { Module } from '@nestjs/common';
import { TestScoreReviewFormService } from './test-score-review-form.service';
import { TestScoreReviewFormController } from './test-score-review-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestScoreReviewFormEntity } from './entities/test-score-review-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestScoreReviewFormEntity])],
  controllers: [TestScoreReviewFormController],
  providers: [TestScoreReviewFormService],
})
export class TestScoreReviewFormModule {}
