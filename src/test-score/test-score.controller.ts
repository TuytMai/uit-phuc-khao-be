import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtStudentAuthGuard } from 'src/auth/guards/jwt-student-auth.guard';
import { AuthenticatedStudentRequest } from 'src/auth/types/authenticated-student-request';
import { CreateTestScoreDto } from './dto/create-test-score.dto';
import { UpdateTestScoreDto } from './dto/update-test-score.dto';
import { TestScoreService } from './test-score.service';

@Controller('test-score')
export class TestScoreController {
  constructor(private readonly testScoreService: TestScoreService) {}

  @Post()
  @UseGuards(JwtStudentAuthGuard)
  create(
    @Body() createTestScoreDto: CreateTestScoreDto,
    @Request() request: AuthenticatedStudentRequest,
  ) {
    return this.testScoreService.create(createTestScoreDto, request.user.id);
  }

  @Get()
  findAll() {
    return this.testScoreService.findAll();
  }

  @Get('student')
  @UseGuards(JwtStudentAuthGuard)
  findByStudent(@Request() request: AuthenticatedStudentRequest) {
    return this.testScoreService.findByStudentId(request.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testScoreService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestScoreDto: UpdateTestScoreDto,
  ) {
    return this.testScoreService.update(+id, updateTestScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testScoreService.remove(+id);
  }
}
