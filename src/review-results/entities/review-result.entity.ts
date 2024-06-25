import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';
import { TestScoreReviewFormEntity } from 'src/test-score-review-form/entities/test-score-review-form.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'ket_qua_phuc_khao' })
export class ReviewResultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', nullable: true })
  diemPhucKhao: number;

  @Column({ type: 'varchar', nullable: true })
  giaiTrinh: string;

  @OneToOne(
    () => TestScoreReviewFormEntity,
    (testScore) => testScore.reviewResult,
  )
  testScoreReviewForm: TestScoreReviewFormEntity;

  @ManyToOne(() => ReviewBoardEntity)
  reviewBoard: ReviewBoardEntity;

  @UpdateDateColumn()
  ngay: Date;
}
