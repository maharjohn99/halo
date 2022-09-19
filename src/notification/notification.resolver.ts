import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guard/gql-auth.guard';

@Resolver(() => Notification)
@UseGuards(GqlAuthGuard)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => Notification)
  @UseGuards(GqlAuthGuard)
  async createNotification(
    @Args('createNotificationInput')
    createNotificationInput: CreateNotificationInput,
  ): Promise<Notification> {
    const notification = await this.notificationService.createNotification(
      createNotificationInput,
    );
    return notification;
  }

  @Query(() => [Notification])
  @UseGuards(GqlAuthGuard)
  async notifications(): Promise<Notification[]> {
    const notifications = await this.notificationService.findAll();
    return notifications;
  }

  // @Mutation(() => Notification)
  // updateNotification(
  //   @Args('updateNotificationInput')
  //   updateNotificationInput: UpdateNotificationInput,
  // ) {
  //   return this.notificationService.update(
  //     updateNotificationInput._id,
  //     updateNotificationInput,
  //   );
  // }

  // @Mutation(() => Notification)
  // removeNotification(@Args('id', { type: () => Int }) id: number) {
  //   return this.notificationService.remove(id);
  // }
}
