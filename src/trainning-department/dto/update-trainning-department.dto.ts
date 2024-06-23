import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainningDepartmentDto } from './create-trainning-department.dto';

export class UpdateTrainningDepartmentDto extends PartialType(CreateTrainningDepartmentDto) {}
