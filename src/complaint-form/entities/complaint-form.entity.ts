import { StudentEntity } from 'src/student/entities/student.entity';
import { TestScoreReviewFormEntity } from 'src/test-score-review-form/entities/test-score-review-form.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'don_khieu_nai' })
export class ComplaintFormEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  lyDo: string;

  @CreateDateColumn()
  ngayDangKy: Date;

  @Column({ type: 'varchar', nullable: true })
  lyDoTuChoi: string;

  @Column({ type: 'varchar', nullable: false })
  tinhTrang: EComplaintStatus;

  @ManyToOne(() => StudentEntity)
  student: StudentEntity;

  // @OneToOne(() => TestScoreEntity)
  // testScoreEntity: TestScoreEntity;
  @ManyToOne(() => TestScoreReviewFormEntity)
  reviewForm: TestScoreReviewFormEntity;
}

export type EComplaintStatus = 'DA_GUI' | 'TU_CHOI' | 'DANG_XU_LI' | 'DA_XU_LI';
