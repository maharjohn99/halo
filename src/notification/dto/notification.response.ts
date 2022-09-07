import { Field, ObjectType, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Notification {
  @Field(() => ID)
  _id: String;

  @Field()
  charityPartnerId: string;

  @Field()
  fundraiserId: string;

  @Field()
  DonatedAmount: string;

  @Field()
  approveStatus: string;

  @Field()
  NotificationDate: Date;

  @Field()
  read: Boolean;
}
