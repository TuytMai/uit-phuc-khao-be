import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintFormDto } from './create-complaint-form.dto';

export class UpdateComplaintFormDto extends PartialType(CreateComplaintFormDto) {}
