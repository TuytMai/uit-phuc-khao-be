import { ReviewResultEntity } from 'src/review-results/entities/review-result.entity';
import { StudentEntity } from 'src/student/entities/student.entity';
import { TestScoreEntity } from 'src/test-score/entities/test-score.entity';
import { TrainningDepartmentEntity } from 'src/trainning-department/entities/trainning-department.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'don_phuc_khao' })
export class TestScoreReviewFormEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  maLop: string;

  @Column({ type: 'timestamp', nullable: false })
  ngayThi: Date;

  @Column({ type: 'varchar', nullable: false })
  phongThi: string;

  @Column({ type: 'varchar', nullable: false })
  caThi: string;

  @Column({ type: 'varchar', nullable: false })
  lyDo: string;

  @Column({ type: 'varchar', nullable: false })
  tinhTrang: EReviewStatus;

  @Column({ type: 'varchar', nullable: true })
  lyDoTuChoi: string;

  @CreateDateColumn()
  ngayDangKy: Date;

  @Column({ type: 'varchar', nullable: false })
  nguoiPhucKhao: string;

  @OneToOne(
    () => ReviewResultEntity,
    (reviewResult) => reviewResult.testScoreReviewForm,
  )
  @JoinColumn({ name: 'review_result_id' })
  reviewResult: ReviewResultEntity;

  @ManyToOne(() => StudentEntity)
  student: StudentEntity;

  @OneToOne(() => TestScoreEntity)
  testScore: TestScoreEntity;

  @ManyToOne(() => TrainningDepartmentEntity)
  trainningDepartment: TrainningDepartmentEntity;
}

export type EReviewStatus = 'DA_GUI' | 'TU_CHOI' | 'DANG_XU_LI' | 'DA_XU_LI';
