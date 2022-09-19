import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from './entities/notification.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Notification', schema: NotificationSchema },
    ]),
  ],
  providers: [NotificationResolver, NotificationService],
})
export class NotificationModule {}
