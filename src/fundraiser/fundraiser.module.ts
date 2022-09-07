import { Module } from '@nestjs/common';
import { FundraiserService } from './fundraiser.service';
import { FundraiserResolver } from './fundraiser.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { FundraiserSchema } from './entities/fundraiser.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Fundraiser', schema: FundraiserSchema },
    ]),
  ],
  providers: [FundraiserResolver, FundraiserService],
})
export class FundraiserModule {}
