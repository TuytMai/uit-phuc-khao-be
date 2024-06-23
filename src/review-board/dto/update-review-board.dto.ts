import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewBoardDto } from './create-review-board.dto';

export class UpdateReviewBoardDto extends PartialType(CreateReviewBoardDto) {}
