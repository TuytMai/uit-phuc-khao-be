import { StudentEntity } from 'src/student/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'diem_thi' })
export class TestScoreEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  maMon: string;

  @Column({ type: 'varchar', nullable: false })
  tenMon: string;

  @Column({ type: 'varchar', nullable: false })
  lop: string;

  @Column({ type: 'varchar', nullable: false })
  khoaQuanLy: string;

  @Column({ type: 'float', nullable: false })
  diemHienTai: number;

  @ManyToOne(() => StudentEntity)
  student: StudentEntity;
}
