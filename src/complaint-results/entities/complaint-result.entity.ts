import { AdministratorEntity } from "src/administrators/entities/administrator.entity";
import { ComplaintFormEntity } from "src/complaint-form/entities/complaint-form.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'ket_qua_khieu_nai' })
export class ComplaintResultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  ketQua: string;

  @OneToOne(() => ComplaintFormEntity)
  complaintForm: ComplaintFormEntity;

  @ManyToOne(() => AdministratorEntity)
  administrator: AdministratorEntity;

  @UpdateDateColumn()
  ngayDangKy: Date;
}
