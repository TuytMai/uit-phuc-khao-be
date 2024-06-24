import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdministratorsService } from 'src/administrators/administrators.service';

@Injectable()
export class JwtAdministratorStrategy extends PassportStrategy(
  Strategy,
  'jwt-administrator',
) {
  constructor(
    configService: ConfigService,
    private readonly administratorsService: AdministratorsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: { sub: string; id: string }) {
    const user = await this.administratorsService.findOne(payload.id);

    return { ...user };
  }
}
