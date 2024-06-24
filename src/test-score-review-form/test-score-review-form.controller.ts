import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TestScoreReviewFormService } from './test-score-review-form.service';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';
import { JwtStudentAuthGuard } from 'src/auth/guards/jwt-student-auth.guard';
import { AuthenticatedStudentRequest } from 'src/auth/types/authenticated-student-request';

@Controller('test-score-review-form')
export class TestScoreReviewFormController {
  constructor(
    private readonly testScoreReviewFormService: TestScoreReviewFormService,
  ) {}

  @Post()
  create(@Body() createTestScoreReviewFormDto: CreateTestScoreReviewFormDto) {
    return this.testScoreReviewFormService.create(createTestScoreReviewFormDto);
  }

  @Get()
  findAll() {
    return this.testScoreReviewFormService.findAll();
  }

  @Get()
  @UseGuards(JwtStudentAuthGuard)
  async findStudentForm(@Request() request: AuthenticatedStudentRequest) {
    const student = request.user;
    const forms = await this.testScoreReviewFormService.findStudentForm(
      student.id,
    );
    return forms;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testScoreReviewFormService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestScoreReviewFormDto: UpdateTestScoreReviewFormDto,
  ) {
    return this.testScoreReviewFormService.update(
      +id,
      updateTestScoreReviewFormDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testScoreReviewFormService.remove(+id);
  }
}
