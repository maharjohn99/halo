import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/dto/user.dto';

@Schema()
@ObjectType()
export class Fundraiser extends mongoose.Document {
  @Prop({ type: String })
  id: mongoose.Types.ObjectId;

  @Field()
  @Prop()
  fundraiserName: string;

  @Prop()
  requestAmount: string;

  @Field()
  @Prop()
  startDate: Date;

  @Field()
  @Prop()
  endDate: Date;

  @Prop()
  approveStatus: string;

  @Prop()
  approvedDate: Date;

  @Prop({ type: String })
  photoGallery: {};

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}

export const FundraiserSchema = SchemaFactory.createForClass(Fundraiser);
