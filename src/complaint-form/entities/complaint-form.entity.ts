import { StudentEntity } from 'src/student/entities/student.entity';
import { TestScoreEntity } from 'src/test-score/entities/test-score.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'don_khieu_nai' })
export class ComplaintFormEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  lyDo: string;

  @Column({ type: 'varchar', nullable: true })
  lyDoTuChoi: string;

  @Column({ type: 'varchar', nullable: false })
  tinhTrang: EComplaintStatus;

  @ManyToOne(() => StudentEntity)
  student: StudentEntity;

  @OneToOne(() => TestScoreEntity)
  testScoreEntity: TestScoreEntity;
}

export type EComplaintStatus = 'DA_GUI' | 'TU_CHOI' | 'DANG_XU_LI' | 'DA_XU_LI';
