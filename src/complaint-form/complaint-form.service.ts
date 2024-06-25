import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
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

  async findAll() {
    const unresolved = await this.complaintFormRepo.find({
      where: {
        tinhTrang: 'DA_GUI',
      },
      relations: {
        reviewForm: {
          testScore: true,
          student: true,
        },
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });

    const rest = await this.complaintFormRepo.find({
      where: {
        tinhTrang: Not('DA_GUI'),
      },
      relations: {
        reviewForm: {
          testScore: true,
          student: true,
        },
      },
      order: {
        ngayDangKy: 'ASC',
      },
    });

    return [...unresolved, ...rest];
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
      relations: {
        reviewForm: {
          testScore: true,
          student: true,
        },
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
