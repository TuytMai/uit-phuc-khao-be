import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'phong_dao_tao'})
export class TrainningDepartmentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    username: string;

    @Column({type: 'varchar', nullable: false})
    password: string;
}
