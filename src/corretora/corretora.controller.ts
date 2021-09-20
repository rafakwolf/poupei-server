import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CorretoraService } from './corretora.service';
import { CreateCorretoraDto } from './dto/create-corretora.dto';
import { UpdateCorretoraDto } from './dto/update-corretora.dto';

@Controller('corretora')
export class CorretoraController {
  constructor(private readonly corretoraService: CorretoraService) {}

  @Post()
  create(@Body() createCorretoraDto: CreateCorretoraDto) {
    return this.corretoraService.create(createCorretoraDto);
  }

  @Get()
  findAll() {
    return this.corretoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corretoraService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCorretoraDto: UpdateCorretoraDto,
  ) {
    return this.corretoraService.update(+id, updateCorretoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corretoraService.remove(+id);
  }
}
