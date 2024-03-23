import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(user_email: string): Promise<Registration | undefined> {
    return await this.RegistrationRepository.findOne({ where: { user_email: user_email } });
  }
  async update(user_email: string, updateRegistrationDto: UpdateRegistrationDto) {
    const existingRegistration = await this.findOne(user_email);
    if (!existingRegistration) {
      throw new NotFoundException(`Registration with email ${user_email} not found.`);
    }
    await this.RegistrationRepository.update({ user_email: user_email }, updateRegistrationDto);
    return await this.findOne(user_email); 
}



  async remove(user_email: string) {
    const existingRegistration = await this.findOne(user_email);
    if (!existingRegistration) {
      throw new NotFoundException(`Registration with email ${user_email} not found.`);
    }
    return await this.RegistrationRepository.remove(existingRegistration);
  }
}
