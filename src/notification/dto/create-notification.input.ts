import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNotificationInput {
  @Field(() => String)
  fundraiserId: string;

  @Field(() => Date)
  NotificationDate: Date;

  @Field(() => String)
  description: string;
}
