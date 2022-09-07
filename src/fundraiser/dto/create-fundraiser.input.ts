import { Field, InputType, ID, HideField } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';

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
  approveStatus: string;

  @Field(() => Date)
  approvedDate: Date;

  @Field(() => String)
  photoGallery: {};

  @Field(() => [CreateUserInput])
  users: CreateUserInput[];
}
