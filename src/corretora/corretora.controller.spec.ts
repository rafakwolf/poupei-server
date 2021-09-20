import { Test, TestingModule } from '@nestjs/testing';
import { CorretoraController } from './corretora.controller';
import { CorretoraService } from './corretora.service';

describe('CorretoraController', () => {
  let controller: CorretoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorretoraController],
      providers: [CorretoraService],
    }).compile();

    controller = module.get<CorretoraController>(CorretoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
