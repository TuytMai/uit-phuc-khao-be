import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAdministratorAuthGuard extends AuthGuard('jwt-administrator') {}
