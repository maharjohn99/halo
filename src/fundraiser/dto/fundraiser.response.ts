import { Field, ObjectType, ID, HideField, InputType } from '@nestjs/graphql';
import { User } from 'src/user/dto/user.dto';

@ObjectType({ isAbstract: true })
export class Fundraiser {
  @Field(() => ID)
  _id: string;

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
}
