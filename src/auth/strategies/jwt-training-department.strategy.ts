import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TrainningDepartmentService } from 'src/trainning-department/trainning-department.service';

@Injectable()
export class JwtTrainingDepartmentStrategy extends PassportStrategy(
  Strategy,
  'jwt-administrator',
) {
  constructor(
    configService: ConfigService,
    private readonly trainningDepartmentService: TrainningDepartmentService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: { sub: string; id: string }) {
    const user = await this.trainningDepartmentService.findOne(payload.id);

    return { ...user };
  }
}
