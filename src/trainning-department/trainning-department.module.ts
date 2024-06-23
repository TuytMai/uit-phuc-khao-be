import { Module } from '@nestjs/common';
import { TrainningDepartmentService } from './trainning-department.service';
import { TrainningDepartmentController } from './trainning-department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainningDepartmentEntity } from './entities/trainning-department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainningDepartmentEntity])],
  controllers: [TrainningDepartmentController],
  providers: [TrainningDepartmentService],
})
export class TrainningDepartmentModule {}
