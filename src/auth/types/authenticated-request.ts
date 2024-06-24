import { StudentEntity } from 'src/student/entities/student.entity';

export type AuthenticatedStudentRequest = {
  user: StudentEntity;
} & Request;
