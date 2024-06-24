import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdministratorsModule } from 'src/administrators/administrators.module';
import { LecturerModule } from 'src/lecturer/lecturer.module';
import { TrainningDepartmentModule } from 'src/trainning-department/trainning-department.module';
import { StudentModule } from '../student/student.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAdministratorStrategy } from './strategies/jwt-administrator.strategy';
import { JwtLecturerStrategy } from './strategies/jwt-lecturer.strategy';
import { JwtStudentStrategy } from './strategies/jwt-student.strategy';
import { JwtTrainingDepartmentStrategy } from './strategies/jwt-training-department.strategy';

@Module({
  imports: [
    StudentModule,
    AdministratorsModule,
    LecturerModule,
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
  providers: [
    AuthService,
    JwtStudentStrategy,
    JwtAdministratorStrategy,
    JwtLecturerStrategy,
    JwtTrainingDepartmentStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
