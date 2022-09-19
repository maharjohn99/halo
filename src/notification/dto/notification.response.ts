import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateNotificationInput {
  @Field(() => String)
  fundraiserId: string;

  @Field(() => Date)
  NotificationDate: Date;

  @Field(() => String)
  description: string;
}
