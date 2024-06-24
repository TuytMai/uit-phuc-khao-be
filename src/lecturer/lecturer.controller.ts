import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { LecturerService } from './lecturer.service';

@Controller('lecturer')
export class LecturerController {
  constructor(private readonly lecturerService: LecturerService) {}

  @Post()
  async create(@Body() createLecturerDto: CreateLecturerDto) {
    createLecturerDto.password = await bcrypt.hash(
      createLecturerDto.password,
      0,
    );
    return this.lecturerService.create(createLecturerDto);
  }

  @Get()
  findAll() {
    return this.lecturerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLecturerDto: UpdateLecturerDto,
  ) {
    return this.lecturerService.update(+id, updateLecturerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerService.remove(+id);
  }
}
