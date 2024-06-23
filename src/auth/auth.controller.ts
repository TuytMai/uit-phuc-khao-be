import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { StudentService } from '../student/student.service';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
  ) {}

  @Post('student/login')
  async login(@Body() authDto: AuthCredentialDto) {
    const student = await this.studentService.findOne(authDto.username);

    if (await bcrypt.compare(authDto.password, student.password)) {
      return {
        ...this.authService.generateToken(student.id),
        ...student,
      };
    } else {
      throw new ForbiddenException('Wrong password');
    }
  }
}
