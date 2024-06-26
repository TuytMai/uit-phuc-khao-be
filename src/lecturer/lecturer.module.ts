import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerController } from './lecturer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LecturerEntity } from './entities/lecturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LecturerEntity])],
  controllers: [LecturerController],
  providers: [LecturerService],
  exports: [LecturerService],
})
export class LecturerModule {}
