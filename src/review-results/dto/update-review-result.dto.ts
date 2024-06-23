import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewResultDto } from './create-review-result.dto';

export class UpdateReviewResultDto extends PartialType(CreateReviewResultDto) {}
