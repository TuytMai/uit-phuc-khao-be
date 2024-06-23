import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintResultDto } from './create-complaint-result.dto';

export class UpdateComplaintResultDto extends PartialType(CreateComplaintResultDto) {}
