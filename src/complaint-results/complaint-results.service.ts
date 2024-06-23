import { Injectable } from '@nestjs/common';
import { CreateComplaintResultDto } from './dto/create-complaint-result.dto';
import { UpdateComplaintResultDto } from './dto/update-complaint-result.dto';
import { Repository } from 'typeorm';
import { ComplaintFormEntity } from 'src/complaint-form/entities/complaint-form.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ComplaintResultEntity } from './entities/complaint-result.entity';

@Injectable()
export class ComplaintResultsService {
  constructor(
    @InjectRepository(ComplaintResultEntity)
    private readonly complaintResultsRepo: Repository<ComplaintResultEntity>) {}

  create(createComplaintResultDto: CreateComplaintResultDto) {
    return this.complaintResultsRepo.save(createComplaintResultDto);
  }

  findAll() {
    return `This action returns all complaintResults`;
  }

  findOne(id: string) {
    return this.complaintResultsRepo.findOneBy({
      id: id,
    });
  }

  update(id: number, updateComplaintResultDto: UpdateComplaintResultDto) {
    return `This action updates a #${id} complaintResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaintResult`;
  }
}
