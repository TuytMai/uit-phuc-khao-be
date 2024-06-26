import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { AdministratorEntity } from './entities/administrator.entity';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectRepository(AdministratorEntity)
    private readonly administratorRepo: Repository<AdministratorEntity>,
  ) {}

  create(createAdministratorDto: CreateAdministratorDto) {
    return this.administratorRepo.save(createAdministratorDto);
  }

  findAll() {
    return `This action returns all administrators`;
  }

  findOne(id: string) {
    return this.administratorRepo.findOneBy({
      id: id,
    });
  }

  findByUsername(username: string) {
    return this.administratorRepo.findOneBy({
      username,
    });
  }

  update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    return `This action updates a #${id} administrator`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrator`;
  }
}
