import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: [String] })
  roles: string[];

  @Prop({ type: String })
  userType: string;

  @Prop({ type: Boolean })
  verifiedEmail: boolean;

  @Prop({ type: String })
  refreshToken: boolean;

  @Prop({ type: String })
  otp: string;

  @Prop({ type: String })
  otpCreatedAt: string;

  @Prop({ type: String })
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// @Field(() => [ID])
// user: mongoose.Types.ObjectId[];
