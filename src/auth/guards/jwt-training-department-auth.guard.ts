import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtTrainingDepartmentAuthGuard extends AuthGuard(
  'jwt-training-department',
) {}
