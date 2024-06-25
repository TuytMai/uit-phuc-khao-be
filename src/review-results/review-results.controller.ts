import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReviewResultDto } from './dto/create-review-result.dto';
import { UpdateReviewResultDto } from './dto/update-review-result.dto';
import { ReviewResultsService } from './review-results.service';

@Controller('review-results')
export class ReviewResultsController {
  constructor(private readonly reviewResultsService: ReviewResultsService) {}

  @Post()
  create(@Body() createReviewResultDto: CreateReviewResultDto) {
    return this.reviewResultsService.create(createReviewResultDto);
  }

  @Get()
  findAll() {
    return this.reviewResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewResultsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewResultDto: UpdateReviewResultDto,
  ) {
    return this.reviewResultsService.update(+id, updateReviewResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewResultsService.remove(+id);
  }
}
