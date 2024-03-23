import { ContractForm } from './../entities/contract-form.entity';
import { Module } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { ContractFormController } from './contract-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/login/login.service';
import { RegistrationService } from 'src/registration/registration.service';

@Module({
  imports:[TypeOrmModule.forFeature([ContractForm])],
  controllers: [ContractFormController],
  providers: [ContractFormService]
})
export class ContractFormModule {}
