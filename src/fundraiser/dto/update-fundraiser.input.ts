import { CreateFundraiserInput } from './create-fundraiser.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFundraiserInput extends PartialType(CreateFundraiserInput) {
  @Field(() => String)
  _id: String;
}
