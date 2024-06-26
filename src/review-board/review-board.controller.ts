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
import { JwtAdministratorAuthGuard } from 'src/auth/guards/jwt-administrator-auth.guard';
import { JwtLecturerAuthGuard } from 'src/auth/guards/jwt-lecturer-auth.guard';
import { AuthenticatedLecturerRequest } from 'src/auth/types/authenticated-lecturer-request';
import { AddLecturerRequest } from './dto/add-lecturer-request.dto';
import { CreateReviewBoardDto } from './dto/create-review-board.dto';
import { UpdateReviewBoardDto } from './dto/update-review-board.dto';
import { ReviewBoardService } from './review-board.service';

@Controller('review-board')
export class ReviewBoardController {
  constructor(private readonly reviewBoardService: ReviewBoardService) {}

  @Post()
  @UseGuards(JwtAdministratorAuthGuard)
  create(@Body() createReviewBoardDto: CreateReviewBoardDto) {
    return this.reviewBoardService.create(createReviewBoardDto);
  }

  @Patch(':id/add-lecturer')
  addLecturer(
    @Param('id') reviewBoardId: string,
    @Body() dto: AddLecturerRequest,
  ) {
    return this.reviewBoardService.addLecturer(reviewBoardId, dto.lecturerId);
  }

  @Get()
  findAll() {
    return this.reviewBoardService.findAll();
  }

  @Get('lecturer')
  @UseGuards(JwtLecturerAuthGuard)
  findByLecturer(@Request() request: AuthenticatedLecturerRequest) {
    return this.reviewBoardService.findByLecturer(request.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewBoardService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewBoardDto: UpdateReviewBoardDto,
  ) {
    return this.reviewBoardService.update(id, updateReviewBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewBoardService.remove(id);
  }
}
