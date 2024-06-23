import { Module } from '@nestjs/common';
import { ComplaintResultsService } from './complaint-results.service';
import { ComplaintResultsController } from './complaint-results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplaintFormEntity } from 'src/complaint-form/entities/complaint-form.entity';
import { ComplaintResultEntity } from './entities/complaint-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComplaintResultEntity])],
  controllers: [ComplaintResultsController],
  providers: [ComplaintResultsService],
})
export class ComplaintResultsModule {}
