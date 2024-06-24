import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sinh_vien' })
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  hoTen: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  mssv: string;

  @Column({ type: 'varchar', nullable: false })
  lopSinhHoat: string;

  @Column({ type: 'timestamp', nullable: false })
  ngaySinh: Date;

  @Column({ type: 'varchar', nullable: false })
  noiSinh: string;

  @Column({ type: 'varchar', nullable: false })
  khoa: string;

  @Column({ type: 'varchar', nullable: false })
  sdt: string;
}
