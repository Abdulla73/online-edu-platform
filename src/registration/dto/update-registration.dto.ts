import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrationDto } from './create-registration.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRegistrationDto extends PartialType(CreateRegistrationDto) {

}
