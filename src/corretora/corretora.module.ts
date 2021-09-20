import { Module } from '@nestjs/common';
import { CorretoraService } from './corretora.service';
import { CorretoraController } from './corretora.controller';
import { DatabaseModule } from 'src/database.module';
import { corretoraProviders } from './corretora.providers';

@Module({
  controllers: [CorretoraController],
  providers: [CorretoraService, ...corretoraProviders],
  imports: [DatabaseModule],
})
export class CorretoraModule {}
