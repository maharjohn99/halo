import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FundraiserService } from './fundraiser.service';
import { Fundraiser } from './entities/fundraiser.entity';
import { CreateFundraiserInput } from './dto/create-fundraiser.input';
import { UpdateFundraiserInput } from './dto/update-fundraiser.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guard/gql-auth.guard';

@Resolver(() => Fundraiser)
@UseGuards(GqlAuthGuard)
export class FundraiserResolver {
  constructor(private readonly fundraiserService: FundraiserService) {}

  @Mutation(() => Fundraiser)
  @UseGuards(GqlAuthGuard)
  async createFundraiser(
    @Args('createFundraiserInput') createFundraiserInput: CreateFundraiserInput,
  ): Promise<Fundraiser> {
    const fundraiser = await this.fundraiserService.createFundraiser(
      createFundraiserInput,
    );
    return fundraiser;
  }

  @Query(() => [Fundraiser])
  async projects(): Promise<Fundraiser[]> {
    const projects = this.fundraiserService.findAll();
    return projects;
  }

  // // @Mutation(() => Fundraiser)
  // updateFundraiser(
  //   @Args('updateFundraiserInput') updateFundraiserInput: UpdateFundraiserInput,
  // ) {
  //   return this.fundraiserService.updateFundraiser(
  //     updateFundraiserInput._id,
  //     updateFundraiserInput,
  //   );
  // }
}
