import { LecturerEntity } from 'src/lecturer/entities/lecturer.entity';

export type AuthenticatedLecturerRequest = {
  user: LecturerEntity;
} & Request;
