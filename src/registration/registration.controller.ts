import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Get()
  findAll() {
    return this.registrationService.findAll();
  }

  @Get(':user_email')
  findOne(@Param('user_email') user_email: string) {
    return this.registrationService.findOne(user_email);
  }

  @Patch('user_email')
  update(@Param('user_email') user_email: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(user_email, updateRegistrationDto);
  }

  @Delete(':user_email')
  remove(@Param('user_email') user_email: string) {
    return this.registrationService.remove(user_email);
  }
  
}
