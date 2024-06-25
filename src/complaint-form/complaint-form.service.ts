import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateComplaintFormDto } from './dto/create-complaint-form.dto';
import { UpdateComplaintFormDto } from './dto/update-complaint-form.dto';
import { ComplaintFormEntity } from './entities/complaint-form.entity';

@Injectable()
export class ComplaintFormService {
  constructor(
    @InjectRepository(ComplaintFormEntity)
    private readonly complaintFormRepo: Repository<ComplaintFormEntity>,
  ) {}

  create(createComplaintFormDto: CreateComplaintFormDto, studentId: string) {
    return this.complaintFormRepo.save({
      ...createComplaintFormDto,
      student: { id: studentId },
      tinhTrang: 'DA_GUI',
      reviewForm: {
        id: createComplaintFormDto.reviewFormId,
      },
    });
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
      relations: {
        student: true,
        reviewForm: {
          student: true,
          testScore: true,
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
