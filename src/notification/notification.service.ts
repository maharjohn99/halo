import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationInput } from './dto/create-notification.input';
// import { UpdateNotificationInput } from './dto/update-notification.input';

import { Notification } from './entities/notification.entity';
@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private readonly notificationModel: Model<Notification>,
  ) {}

  // create new notification

  async createNotification(
    createNotificationInput: CreateNotificationInput,
  ): Promise<Notification> {
    const createNotification = await this.notificationModel.create(
      createNotificationInput,
    );
    return createNotification.save();
  }

  async findAll(): Promise<Notification[]> {
    const notifications = await this.notificationModel.find().exec();
    console.log(notifications);
    return notifications;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} notification`;
  // }

  // update(id: number, updateNotificationInput: UpdateNotificationInput) {
  //   return `This action updates a #${id} notification`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} notification`;
  // }
}
