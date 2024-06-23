import { Injectable } from '@nestjs/common';
import { CreateComplaintFormDto } from './dto/create-complaint-form.dto';
import { UpdateComplaintFormDto } from './dto/update-complaint-form.dto';
import { Repository } from 'typeorm';
import { ComplaintFormEntity } from './entities/complaint-form.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComplaintFormService {
  constructor(
    @InjectRepository(ComplaintFormEntity)
    private readonly complaintFormRepo: Repository<ComplaintFormEntity>
  ){}

  create(createComplaintFormDto: CreateComplaintFormDto) {
    return this.complaintFormRepo.save(createComplaintFormDto);
  }

  findAll() {
    return `This action returns all complaintForm`;
  }

  findOne(id: string) {
    return this.complaintFormRepo.findOneBy({
      id: id,
    });
  }

  update(id: number, updateComplaintFormDto: UpdateComplaintFormDto) {
    return `This action updates a #${id} complaintForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaintForm`;
  }
}
