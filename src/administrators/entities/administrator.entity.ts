import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ban_giam_hieu'})
export class AdministratorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', nullable: false})
    username: string;

    @Column({type: 'varchar', nullable: false})
    password: string;
}
