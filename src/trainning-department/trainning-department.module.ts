import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainningDepartmentEntity } from './entities/trainning-department.entity';
import { TrainningDepartmentController } from './trainning-department.controller';
import { TrainningDepartmentService } from './trainning-department.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrainningDepartmentEntity])],
  controllers: [TrainningDepartmentController],
  providers: [TrainningDepartmentService],
  exports: [TrainningDepartmentService],
})
export class TrainningDepartmentModule {}
