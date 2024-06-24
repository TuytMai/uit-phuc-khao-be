import { ReviewBoardEntity } from "src/review-board/entities/review-board.entity";
import { TestScoreReviewFormEntity } from "src/test-score-review-form/entities/test-score-review-form.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ket_qua_phuc_khao' })
export class ReviewResultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', nullable: false })
  diemPhucKhao: number;

  @Column({ type: 'varchar', nullable: false })
  giaiTrinh: string;

  @OneToOne(() => TestScoreReviewFormEntity)
  testScoreReviewForm: TestScoreReviewFormEntity;

  @ManyToOne(() => ReviewBoardEntity)
  reviewBoard: ReviewBoardEntity;

  @CreateDateColumn()
  ngay: Date;
}
