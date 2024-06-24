import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdministratorsModule } from 'src/administrators/administrators.module';
import { ReviewBoardModule } from 'src/review-board/review-board.module';
import { TrainningDepartmentModule } from 'src/trainning-department/trainning-department.module';
import { StudentModule } from '../student/student.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStudentStrategy } from './strategies/jwt-student.strategy';

@Module({
  imports: [
    StudentModule,
    AdministratorsModule,
    ReviewBoardModule,
    TrainningDepartmentModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('ACCESS_TOKEN_SECRET'),
      }),
    }),
    ConfigModule,
  ],
  providers: [AuthService, JwtStudentStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
