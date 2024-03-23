import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { AdminGuard } from 'src/login/admin.guard';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.registrationService.findAll();
  }

  @Get(':user_email')
  @UseGuards(AdminGuard)
  findOne(@Param('user_email') user_email: string) {
    return this.registrationService.findOne(user_email);
  }

  @Patch('user_email')
  @UseGuards(AdminGuard)
  update(@Param('user_email') user_email: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(user_email, updateRegistrationDto);
  }

  @Delete(':user_email')
  @UseGuards(AdminGuard)
  remove(@Param('user_email') user_email: string) {
    return this.registrationService.remove(user_email);
  }
  
}
