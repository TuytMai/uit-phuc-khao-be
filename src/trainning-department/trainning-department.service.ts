import { Injectable } from '@nestjs/common';
import { CreateTrainningDepartmentDto } from './dto/create-trainning-department.dto';
import { UpdateTrainningDepartmentDto } from './dto/update-trainning-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrainningDepartmentEntity } from './entities/trainning-department.entity';

@Injectable()
export class TrainningDepartmentService {
  constructor(
    @InjectRepository(TrainningDepartmentEntity)
    private readonly trainingDepartemntRepo: Repository<TrainningDepartmentEntity>,
  ) {}

  create(createTrainningDepartmentDto: CreateTrainningDepartmentDto) {
    return this.trainingDepartemntRepo.save(createTrainningDepartmentDto)
  }

  findAll() {
    return `This action returns all trainningDepartment`;
  }

  findOne(id: string) {
    return this.trainingDepartemntRepo.findOneBy({
      id: id
    })
  }

  update(
    id: number,
    updateTrainningDepartmentDto: UpdateTrainningDepartmentDto,
  ) {
    return `This action updates a #${id} trainningDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainningDepartment`;
  }
}
