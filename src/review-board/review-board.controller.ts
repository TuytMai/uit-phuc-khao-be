import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewBoardService } from './review-board.service';
import { CreateReviewBoardDto } from './dto/create-review-board.dto';
import { UpdateReviewBoardDto } from './dto/update-review-board.dto';

@Controller('review-board')
export class ReviewBoardController {

  constructor(private readonly reviewBoardService: ReviewBoardService) {}

  @Post()
  create(@Body() createReviewBoardDto: CreateReviewBoardDto) {
    return this.reviewBoardService.create(createReviewBoardDto);
  }

  @Get()
  findAll() {
    return this.reviewBoardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewBoardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewBoardDto: UpdateReviewBoardDto) {
    return this.reviewBoardService.update(+id, updateReviewBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewBoardService.remove(+id);
  }
}
