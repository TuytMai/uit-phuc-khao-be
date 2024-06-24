import { TrainningDepartmentEntity } from 'src/trainning-department/entities/trainning-department.entity';

export type AuthenticatedTrainingDepartmentRequest = {
  user: TrainningDepartmentEntity;
} & Request;
