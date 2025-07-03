import { Test, TestingModule } from '@nestjs/testing';
import { MatchpostController } from './matchpost.controller';

describe('MatchpostController', () => {
  let controller: MatchpostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchpostController],
    }).compile();

    controller = module.get<MatchpostController>(MatchpostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
