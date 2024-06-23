import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorsModule } from './administrators/administrators.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ComplaintFormModule } from './complaint-form/complaint-form.module';
import { ComplaintResultsModule } from './complaint-results/complaint-results.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { ReviewBoardModule } from './review-board/review-board.module';
import { ReviewResultsModule } from './review-results/review-results.module';
import { StudentModule } from './student/student.module';
import { TestScoreReviewFormModule } from './test-score-review-form/test-score-review-form.module';
import { TestScoreModule } from './test-score/test-score.module';
import { TrainningDepartmentModule } from './trainning-department/trainning-department.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'phuckhao',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
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
