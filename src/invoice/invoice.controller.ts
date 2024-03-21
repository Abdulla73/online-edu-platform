import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from 'src/entities/invoice.entity';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body(ValidationPipe) createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':inv_number')
  findOne(@Param('inv_number') inv_number: number): Promise<Invoice> {
    return this.invoiceService.findOne(+inv_number);
  }

  @Delete(':inv_number')
  remove(@Param('inv_number') inv_number: number): Promise<void> {
    return this.invoiceService.remove(+inv_number);
  }
}

