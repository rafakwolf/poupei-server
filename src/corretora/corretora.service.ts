import { Inject, Injectable } from '@nestjs/common';
import { CreateCorretoraDto } from './dto/create-corretora.dto';
import { UpdateCorretoraDto } from './dto/update-corretora.dto';
import { Corretora } from './entities/corretora.entity';

@Injectable()
export class CorretoraService {
  constructor(
    @Inject('CORRETORA_REPOSITORY')
    private corretoraRepo: typeof Corretora,
  ) {}

  async create(createCorretoraDto: CreateCorretoraDto) {
    return await this.corretoraRepo.create(createCorretoraDto);
  }

  async findAll() {
    return await this.corretoraRepo.findAll();
  }

  async findOne(id: number) {
    return await this.corretoraRepo.findOne({ where: { id } });
  }

  async update(id: number, updateCorretoraDto: UpdateCorretoraDto) {
    return await this.corretoraRepo.update(updateCorretoraDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.corretoraRepo.destroy({ where: { id } });
  }
}
