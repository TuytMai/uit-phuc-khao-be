import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestScoreService } from './test-score.service';
import { CreateTestScoreDto } from './dto/create-test-score.dto';
import { UpdateTestScoreDto } from './dto/update-test-score.dto';

@Controller('test-score')
export class TestScoreController {
  constructor(private readonly testScoreService: TestScoreService) {}

  @Post()
  create(@Body() createTestScoreDto: CreateTestScoreDto) {
    return this.testScoreService.create(createTestScoreDto);
  }

  @Get()
  findAll() {
    return this.testScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testScoreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestScoreDto: UpdateTestScoreDto) {
    return this.testScoreService.update(+id, updateTestScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testScoreService.remove(+id);
  }
}
