import { StudentEntity } from 'src/student/entities/student.entity';
import { TestScoreEntity } from 'src/test-score/entities/test-score.entity';
import { TrainningDepartmentEntity } from 'src/trainning-department/entities/trainning-department.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'don_phuc_khao' })
export class TestScoreReviewFormEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
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

  @Column({ type: 'varchar', nullable: true })
  nguoiPhucKhao: string;

  @ManyToOne(() => StudentEntity)
  student: StudentEntity;

  @ManyToOne(() => TestScoreEntity)
  @JoinColumn({ name: 'test_score_id' })
  testScore: TestScoreEntity;

  @ManyToOne(() => TrainningDepartmentEntity)
  trainningDepartment: TrainningDepartmentEntity;
}

export type EReviewStatus = 'DA_GUI' | 'TU_CHOI' | 'DANG_XU_LI' | 'DA_XU_LI';
