import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplaintFormService } from './complaint-form.service';
import { CreateComplaintFormDto } from './dto/create-complaint-form.dto';
import { UpdateComplaintFormDto } from './dto/update-complaint-form.dto';

@Controller('complaint-form')
export class ComplaintFormController {
  constructor(private readonly complaintFormService: ComplaintFormService) {}

  @Post()
  create(@Body() createComplaintFormDto: CreateComplaintFormDto) {
    return this.complaintFormService.create(createComplaintFormDto);
  }

  @Get()
  findAll() {
    return this.complaintFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintFormService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplaintFormDto: UpdateComplaintFormDto) {
    return this.complaintFormService.update(+id, updateComplaintFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintFormService.remove(+id);
  }
}
