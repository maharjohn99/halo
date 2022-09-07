import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
@ObjectType()
export class Notification extends mongoose.Document {
  @Prop({ type: String })
  id: mongoose.Types.ObjectId;

  @Field()
  @Prop()
  charityPartnerId: string;

  @Prop()
  Amount: string;

  @Prop()
  approveStatus: string;

  @Prop()
  NotificationDate: Date;

  @Prop()
  read: Boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
