import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestScoreReviewFormService } from './test-score-review-form.service';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';

@Controller('test-score-review-form')
export class TestScoreReviewFormController {
  constructor(private readonly testScoreReviewFormService: TestScoreReviewFormService) {}

  @Post()
  create(@Body() createTestScoreReviewFormDto: CreateTestScoreReviewFormDto) {
    return this.testScoreReviewFormService.create(createTestScoreReviewFormDto);
  }

  @Get()
  findAll() {
    return this.testScoreReviewFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testScoreReviewFormService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestScoreReviewFormDto: UpdateTestScoreReviewFormDto) {
    return this.testScoreReviewFormService.update(+id, updateTestScoreReviewFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testScoreReviewFormService.remove(+id);
  }
}
