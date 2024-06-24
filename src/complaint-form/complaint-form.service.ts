import { Injectable } from '@nestjs/common';
import { CreateComplaintFormDto } from './dto/create-complaint-form.dto';
import { UpdateComplaintFormDto } from './dto/update-complaint-form.dto';
import { In, Repository } from 'typeorm';
import { ComplaintFormEntity } from './entities/complaint-form.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComplaintFormService {
  constructor(
    @InjectRepository(ComplaintFormEntity)
    private readonly complaintFormRepo: Repository<ComplaintFormEntity>,
  ) {}

  create(createComplaintFormDto: CreateComplaintFormDto) {
    return this.complaintFormRepo.save(createComplaintFormDto);
  }

  findAll() {
    return `This action returns all complaintForm`;
  }

  findStudent(studentId: string) {
    return this.complaintFormRepo.find({
      where: {
        student: {
          id: studentId,
        },
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findUnresolvedForm() {
    return this.complaintFormRepo.find({
      where: {
        tinhTrang: 'DA_GUI',
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findResolvingForm() {
    return this.complaintFormRepo.find({
      where: {
        tinhTrang: 'DANG_XU_LI',
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findResolvedForm() {
    return this.complaintFormRepo.find({
      where: {
        tinhTrang: In(['TU_CHOI', 'DA_XU_LI']),
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });
  }

  findOne(id: string) {
    return this.complaintFormRepo.findOneBy({
      id: id,
    });
  }

  async update(id: string, updateComplaintFormDto: UpdateComplaintFormDto) {
    const tesComplaintForm = await this.complaintFormRepo.findOneBy({
      id,
    });

    Object.assign(tesComplaintForm, updateComplaintFormDto);

    return this.complaintFormRepo.save(tesComplaintForm);
  }

  remove(id: number) {
    return `This action removes a #${id} complaintForm`;
  }
}
