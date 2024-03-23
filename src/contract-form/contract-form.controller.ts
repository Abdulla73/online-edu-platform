import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { ContractFormService } from './contract-form.service';
import { CreateContractFormDto } from './dto/create-contract-form.dto';
import { UpdateContractFormDto } from './dto/update-contract-form.dto';

@Controller('contract-form')
export class ContractFormController {
  constructor(private readonly contractFormService: ContractFormService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createContractFormDto: CreateContractFormDto) {
    return this.contractFormService.create(createContractFormDto);
  }

  @Get()
  findAll() {
    return this.contractFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractFormService.findOne(+id);
  }
  
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateContractFormDto: UpdateContractFormDto) {
    const updatedContract = await this.contractFormService.update(+id, updateContractFormDto);
    if (updatedContract) {
      return updatedContract; 
    } else {
      throw new NotFoundException(`Contract with id ${id} not found.`);
    }
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contractFormService.remove(+id);
  }
}
