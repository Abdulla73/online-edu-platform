import { Module } from '@nestjs/common';
import { AuthService } from './login.service';
import { AuthController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
import { RegistrationModule } from 'src/registration/registration.module';
import { RegistrationService } from 'src/registration/registration.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { Registration } from 'src/entities/registration.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: 'c07422b74285bfc0fb7ebe9a11686f2aa9f14e90a0fb03ae9a33b8bc1e06771e', // Provide a valid secret key here
      signOptions: { expiresIn: '1h' },
    }),
    RegistrationModule,
    TypeOrmModule.forFeature([Registration]), // Provide RegistrationRepository here
  ],
  controllers: [AuthController],
  providers: [AuthService, RegistrationService],
})
export class LoginModule {}
