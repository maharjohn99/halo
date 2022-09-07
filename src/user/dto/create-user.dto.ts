import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

    @Field(() => [String])
    roles?: string[];

    @Field(() => String)
    userType?: string;

    @Field(() => Boolean)
    verifiedEmail?: boolean;
}
