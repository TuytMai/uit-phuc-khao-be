import { PartialType } from '@nestjs/mapped-types';
import { CreateTestScoreReviewFormDto } from './create-test-score-review-form.dto';

export class UpdateTestScoreReviewFormDto extends PartialType(
  CreateTestScoreReviewFormDto,
) {
  diemPhucKhao: number;
  giaiTrinh: string;
}
