import { Test, TestingModule } from '@nestjs/testing';
import { FundraiserResolver } from './fundraiser.resolver';
import { FundraiserService } from './fundraiser.service';

describe('FundraiserResolver', () => {
  let resolver: FundraiserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundraiserResolver, FundraiserService],
    }).compile();

    resolver = module.get<FundraiserResolver>(FundraiserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
