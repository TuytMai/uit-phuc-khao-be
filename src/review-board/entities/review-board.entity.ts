import { LecturerEntity } from 'src/lecturer/entities/lecturer.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'hoi_dong_phuc_khao' })
export class ReviewBoardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  ten: string;

  @ManyToMany(() => LecturerEntity)
  @JoinTable()
  lecturers: LecturerEntity[];
}
