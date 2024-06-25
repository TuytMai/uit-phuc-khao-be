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
  Query,
} from '@nestjs/common';
import { TestScoreReviewFormService } from './test-score-review-form.service';
import { CreateTestScoreReviewFormDto } from './dto/create-test-score-review-form.dto';
import { UpdateTestScoreReviewFormDto } from './dto/update-test-score-review-form.dto';
import { JwtStudentAuthGuard } from 'src/auth/guards/jwt-student-auth.guard';
import { AuthenticatedStudentRequest } from 'src/auth/types/authenticated-student-request';
import { JwtTrainingDepartmentAuthGuard } from 'src/auth/guards/jwt-training-department-auth.guard';
import { JwtLecturerAuthGuard } from 'src/auth/guards/jwt-lecturer-auth.guard';
import { AuthenticatedLecturerRequest } from 'src/auth/types/authenticated-lecturer-request';

@Controller('test-score-review-form')
export class TestScoreReviewFormController {
  constructor(
    private readonly testScoreReviewFormService: TestScoreReviewFormService,
  ) {}

  @Post()
  @UseGuards(JwtStudentAuthGuard)
  create(
    @Body() createTestScoreReviewFormDto: CreateTestScoreReviewFormDto,
    @Request() request: AuthenticatedStudentRequest,
  ) {
    return this.testScoreReviewFormService.create(
      createTestScoreReviewFormDto,
      request.user.id,
    );
  }

  @Get()
  findAll() {
    return this.testScoreReviewFormService.findAll();
  }

  @Get('unresolved')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findUnreolvedForm() {
    return this.testScoreReviewFormService.findUnresolvedForm();
  }

  @Get('student')
  @UseGuards(JwtStudentAuthGuard)
  async findStudentForm(@Request() request: AuthenticatedStudentRequest) {
    const student = request.user;
    const forms = await this.testScoreReviewFormService.findStudentForm(
      student.id,
    );
    return forms;
  }

  @Get('lecturer')
  @UseGuards(JwtLecturerAuthGuard)
  async findByLecturer(@Request() request: AuthenticatedLecturerRequest) {
    const lecturer = request.user;
    const forms = await this.testScoreReviewFormService.findLecturerForm(
      lecturer.id,
    );
    return forms;
  }

  @Get('resolving')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findResolvingForm() {
    return this.testScoreReviewFormService.findResolvingForm();
  }

  @Get('resolved')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findResolvedForm() {
    return this.testScoreReviewFormService.findResolvedForm();
  }

  @Get('review-board')
  findByReviewBoard(@Query('id') id: string) {
    return this.testScoreReviewFormService.findByReviewBoard(id);
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
      id,
      updateTestScoreReviewFormDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testScoreReviewFormService.remove(+id);
  }
}
