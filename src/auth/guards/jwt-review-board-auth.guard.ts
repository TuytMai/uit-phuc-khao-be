import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtReviewBoardAuthGuard extends AuthGuard('jwt-review-board') {}
