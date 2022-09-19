import { Field, InputType, ID, HideField } from '@nestjs/graphql';

@InputType()
export class CreateFundraiserInput {
  @Field(() => String)
  fundraiserName: string;

  @Field(() => Number)
  requestAmount: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => String)
  photoGallery: {};
}
