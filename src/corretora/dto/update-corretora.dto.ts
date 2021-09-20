import { PartialType } from '@nestjs/mapped-types';
import { CreateCorretoraDto } from './create-corretora.dto';

export class UpdateCorretoraDto extends PartialType(CreateCorretoraDto) {}
