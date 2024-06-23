import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturerModule } from './lecturer/lecturer.module';
import { TrainningDepartmentModule } from './trainning-department/trainning-department.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { ReviewBoardModule } from './review-board/review-board.module';
import { TestScoreModule } from './test-score/test-score.module';
import { TestScoreReviewFormModule } from './test-score-review-form/test-score-review-form.module';
import { ComplaintFormModule } from './complaint-form/complaint-form.module';
import { ReviewResultsModule } from './review-results/review-results.module';
import { ComplaintResultsModule } from './complaint-results/complaint-results.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'phuckhao',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    StudentModule,
    LecturerModule,
    TrainningDepartmentModule,
    AdministratorsModule,
    ReviewBoardModule,
    TestScoreModule,
    TestScoreReviewFormModule,
    ComplaintFormModule,
    ReviewResultsModule,
    ComplaintResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
