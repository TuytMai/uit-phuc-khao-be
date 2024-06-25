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
import { ComplaintFormService } from './complaint-form.service';
import { CreateComplaintFormDto } from './dto/create-complaint-form.dto';
import { UpdateComplaintFormDto } from './dto/update-complaint-form.dto';
import { JwtTrainingDepartmentAuthGuard } from 'src/auth/guards/jwt-training-department-auth.guard';
import { JwtTrainingDepartmentStrategy } from 'src/auth/strategies/jwt-training-department.strategy';
import { AuthenticatedTrainingDepartmentRequest } from 'src/auth/types/authenticated-training-department-request';

@Controller('complaint-form')
export class ComplaintFormController {
  constructor(private readonly complaintFormService: ComplaintFormService) {}

  @Post()
  create(@Body() createComplaintFormDto: CreateComplaintFormDto) {
    return this.complaintFormService.create(createComplaintFormDto);
  }

  @Get('unresolved')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findUnreolvedForm() {
    return this.complaintFormService.findUnresolvedForm();
  }

  @Get('student')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  async findStudentForm(
    @Request() request: AuthenticatedTrainingDepartmentRequest,
  ) {
    const student = request.user;
    const forms = await this.complaintFormService.findStudent(student.id);
    return forms;
  }

  @Get('resolving')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findResolvingForm() {
    return this.complaintFormService.findResolvingForm();
  }

  @Get('resolved')
  @UseGuards(JwtTrainingDepartmentAuthGuard)
  findResolvedForm() {
    return this.complaintFormService.findResolvedForm();
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
  update(
    @Param('id') id: string,
    @Body() updateComplaintFormDto: UpdateComplaintFormDto,
  ) {
    return this.complaintFormService.update(id, updateComplaintFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintFormService.remove(+id);
  }
}
