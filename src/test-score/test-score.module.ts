import { Module } from '@nestjs/common';
import { TestScoreService } from './test-score.service';
import { TestScoreController } from './test-score.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestScoreEntity } from './entities/test-score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestScoreEntity])],
  controllers: [TestScoreController],
  providers: [TestScoreService],
})
export class TestScoreModule {}
