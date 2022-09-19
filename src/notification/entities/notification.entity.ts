import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
@ObjectType()
export class Notification extends mongoose.Document {
  @Prop({ type: String })
  id: mongoose.Types.ObjectId;

  @Field({ nullable: true })
  @Prop()
  fundraiserId: string;

  @Field({ nullable: true })
  @Prop()
  NotificationDate?: Date;

  @Field({ nullable: true })
  @Prop()
  description?: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
