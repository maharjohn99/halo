import { Field, InputType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';

@InputType()
export class CreateNotificationInput {
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
