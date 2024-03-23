import { AuthController } from './login/login.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './post/blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import config from 'ormconfig';
import { JwtMiddleware } from './middleware/login.middleware';
import { ContractFormModule } from './contract-form/contract-form.module';



@Module({
  imports: [TypeOrmModule.forRoot(config), BlogModule, InvoiceModule, RegistrationModule, LoginModule, ContractFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('login');
  }
}
