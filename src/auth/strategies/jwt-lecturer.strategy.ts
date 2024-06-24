import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LecturerService } from 'src/lecturer/lecturer.service';

@Injectable()
export class JwtLecturerStrategy extends PassportStrategy(
  Strategy,
  'jwt-lecturer',
) {
  constructor(
    configService: ConfigService,
    private readonly lecturerService: LecturerService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: { sub: string; id: string }) {
    const user = await this.lecturerService.findOne(payload.id);

    return { ...user };
  }
}
