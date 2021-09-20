import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorretoraModule } from './corretora/corretora.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CorretoraModule],
})
export class AppModule {}
