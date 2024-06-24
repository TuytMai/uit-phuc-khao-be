import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { LecturerService } from 'src/lecturer/lecturer.service';
import { TrainningDepartmentService } from 'src/trainning-department/trainning-department.service';
import { StudentService } from '../student/student.service';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
    private readonly administratorsService: AdministratorsService,
    private readonly lecturerService: LecturerService,
    private readonly trainningDepartmentService: TrainningDepartmentService,
  ) {}

  @Post('student/login')
  async studentLogin(@Body() authDto: AuthCredentialDto) {
    const user = await this.studentService.findByMssv(authDto.username);

    if (await bcrypt.compare(authDto.password, user.password)) {
      return {
        ...this.authService.generateToken(user.id, user),
        ...user,
      };
    } else {
      throw new ForbiddenException('Wrong password');
    }
  }

  @Post('administrator/login')
  async administratorLogin(@Body() authDto: AuthCredentialDto) {
    const user = await this.administratorsService.findOne(authDto.username);

    if (await bcrypt.compare(authDto.password, user.password)) {
      return {
        ...this.authService.generateToken(user.id, user),
        ...user,
      };
    } else {
      throw new ForbiddenException('Wrong password');
    }
  }

  @Post('lecturer/login')
  async lecturerLogin(@Body() authDto: AuthCredentialDto) {
    const user = await this.lecturerService.findByUsername(authDto.username);

    if (await bcrypt.compare(authDto.password, user.password)) {
      return {
        ...this.authService.generateToken(user.id, user),
        ...user,
      };
    } else {
      throw new ForbiddenException('Wrong password');
    }
  }

  @Post('training-department/login')
  async trainingDepartmentLogin(@Body() authDto: AuthCredentialDto) {
    const user = await this.trainningDepartmentService.findByUsername(
      authDto.username,
    );

    if (await bcrypt.compare(authDto.password, user.password)) {
      return {
        ...this.authService.generateToken(user.id, user),
        ...user,
      };
    } else {
      throw new ForbiddenException('Wrong password');
    }
  }
}
