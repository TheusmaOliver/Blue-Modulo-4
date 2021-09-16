import { Test, TestingModule } from '@nestjs/testing';
import { EpisodioService } from './episodio.service';

describe('EpisodioService', () => {
  let service: EpisodioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodioService],
    }).compile();

    service = module.get<EpisodioService>(EpisodioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
