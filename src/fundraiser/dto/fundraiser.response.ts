import { Field, ObjectType, ID } from '@nestjs/graphql';

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
  photoGallery: {};
}
