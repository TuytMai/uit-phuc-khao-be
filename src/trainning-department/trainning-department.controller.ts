import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateTrainningDepartmentDto } from './dto/create-trainning-department.dto';
import { UpdateTrainningDepartmentDto } from './dto/update-trainning-department.dto';
import { TrainningDepartmentService } from './trainning-department.service';

@Controller('trainning-department')
export class TrainningDepartmentController {
  constructor(
    private readonly trainningDepartmentService: TrainningDepartmentService,
  ) {}

  @Post()
  async create(
    @Body() createTrainningDepartmentDto: CreateTrainningDepartmentDto,
  ) {
    createTrainningDepartmentDto.password = await bcrypt.hash(
      createTrainningDepartmentDto.password,
      0,
    );
    return this.trainningDepartmentService.create(createTrainningDepartmentDto);
  }

  @Get()
  findAll() {
    return this.trainningDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainningDepartmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainningDepartmentDto: UpdateTrainningDepartmentDto,
  ) {
    return this.trainningDepartmentService.update(
      +id,
      updateTrainningDepartmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainningDepartmentService.remove(+id);
  }
}
