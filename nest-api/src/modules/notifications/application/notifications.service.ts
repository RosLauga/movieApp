import { Injectable } from '@nestjs/common';
import { Notification } from '../domain/entities/notification.entity';
import { NotificationDbRepository } from '../infrastructure/repository/notificationDb.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateNotificationDto } from '../dto/updateNotification.dto';
import { QueryProps } from '../infrastructure/controllers/notifications.controller';

@Injectable()
export class NotificationServices {
  constructor(private readonly notifications: NotificationDbRepository) {}

  async create(notification: Notification) {
    const newNotification: Notification = new Notification();

    newNotification.id = uuidv4();
    newNotification.title = notification.title;
    newNotification.description = notification.description;
    newNotification.readed = false;
    newNotification.userId = notification.userId;

    return await this.notifications.create(newNotification);
  }

  // findById(id: string) {
  //   const notification = this.allNotifications.find((x) => x.id === id);
  //   if (notification) {
  //     return notification;
  //   } else {
  //     return new HttpException('No se encontraron notificaciones', 400);
  //   }
  // }

  async findAll(query: QueryProps): Promise<Notification[]> {
    const notifications = await this.notifications.findAll(query);
    return notifications;
  }

  async update(
    notification: UpdateNotificationDto,
  ): Promise<Notification | undefined> {
    const findNotification = await this.notifications.findById(notification.id);
    if (findNotification) {
      const not = await this.notifications.update(findNotification);
      console.log('Notification Updated', not);
      return not;
    }
  }
}
