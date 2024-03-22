import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registration } from 'src/entities/registration.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RegistrationService {

  constructor(
    @InjectRepository(Registration) private readonly RegistrationRepository: Repository<Registration>,
  ) {
  }
  async create(CreateRegistrationDto: CreateRegistrationDto) {
    const reg = await this.RegistrationRepository.create(CreateRegistrationDto);
    return await this.RegistrationRepository.save(reg);
  }

  async findAll() {
    return await this.RegistrationRepository.find({});
  }

  async findOne(email: string): Promise<Registration | undefined> {
    return await this.RegistrationRepository.findOne({ where: { user_email: email } });
  }
  update(user_id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${user_id} registration`;
  }

  async remove(user_id: number) {
    const reg =  await this.RegistrationRepository.findOneBy({
      user_id: user_id
    });
    await this.RegistrationRepository.remove(reg)
  }
}
