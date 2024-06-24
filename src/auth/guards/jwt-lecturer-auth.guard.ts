import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtLecturerAuthGuard extends AuthGuard('jwt-lecturer') {}
