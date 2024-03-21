import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './post/blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),BlogModule, InvoiceModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
