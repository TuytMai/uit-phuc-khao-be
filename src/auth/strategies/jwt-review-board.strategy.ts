import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ReviewBoardService } from 'src/review-board/review-board.service';

@Injectable()
export class JwtReviewBoardStrategy extends PassportStrategy(
  Strategy,
  'jwt-administrator',
) {
  constructor(
    configService: ConfigService,
    private readonly reviewBoardService: ReviewBoardService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: { sub: string; id: string }) {
    const user = await this.reviewBoardService.findOne(payload.id);

    return { ...user };
  }
}
