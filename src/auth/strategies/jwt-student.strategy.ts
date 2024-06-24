import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class JwtStudentStrategy extends PassportStrategy(
  Strategy,
  'jwt-student',
) {
  constructor(
    configService: ConfigService,
    private readonly studentService: StudentService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: { sub: string; id: string }) {
    console.log({ payload });
    const user = await this.studentService.findById(payload.id);

    return { ...user };
  }
}
