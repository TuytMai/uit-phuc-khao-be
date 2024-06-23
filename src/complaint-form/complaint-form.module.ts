import { Module } from '@nestjs/common';
import { ComplaintFormService } from './complaint-form.service';
import { ComplaintFormController } from './complaint-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplaintFormEntity } from './entities/complaint-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComplaintFormEntity])],
  controllers: [ComplaintFormController],
  providers: [ComplaintFormService],
})
export class ComplaintFormModule {}
