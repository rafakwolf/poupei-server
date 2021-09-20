import { Test, TestingModule } from '@nestjs/testing';
import { CorretoraService } from './corretora.service';

describe('CorretoraService', () => {
  let service: CorretoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorretoraService],
    }).compile();

    service = module.get<CorretoraService>(CorretoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
