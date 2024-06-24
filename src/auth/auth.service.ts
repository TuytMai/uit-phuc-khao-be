import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateToken(id: string, data: any) {
    const access_token = this.jwtService.sign(
      {
        ...data,
        id,
        sub: id,
      },
      {
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
        expiresIn:
          this.configService.get('ENVIRONMENT') === 'development'
            ? '100d'
            : '1h',
      },
    );

    return {
      access_token,
    };
  }
}
