import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'giang_vien' })
export class LecturerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  hoTen: string;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @ManyToMany(() => ReviewBoardEntity)
  reviewBoards: ReviewBoardEntity[];
}
