import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';
import { TestScoreReviewFormEntity } from 'src/test-score-review-form/entities/test-score-review-form.entity';
import {
  Column,
  Entity,
  JoinColumn,
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
    { cascade: true },
  )
  @JoinColumn({ name: 'test_score_review_form_id' })
  testScoreReviewForm: TestScoreReviewFormEntity;

  @ManyToOne(() => ReviewBoardEntity)
  reviewBoard: ReviewBoardEntity;

  @UpdateDateColumn()
  ngay: Date;
}
