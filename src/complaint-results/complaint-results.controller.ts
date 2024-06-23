import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplaintResultsService } from './complaint-results.service';
import { CreateComplaintResultDto } from './dto/create-complaint-result.dto';
import { UpdateComplaintResultDto } from './dto/update-complaint-result.dto';

@Controller('complaint-results')
export class ComplaintResultsController {
  constructor(private readonly complaintResultsService: ComplaintResultsService) {}

  @Post()
  create(@Body() createComplaintResultDto: CreateComplaintResultDto) {
    return this.complaintResultsService.create(createComplaintResultDto);
  }

  @Get()
  findAll() {
    return this.complaintResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintResultsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplaintResultDto: UpdateComplaintResultDto) {
    return this.complaintResultsService.update(+id, updateComplaintResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintResultsService.remove(+id);
  }
}
