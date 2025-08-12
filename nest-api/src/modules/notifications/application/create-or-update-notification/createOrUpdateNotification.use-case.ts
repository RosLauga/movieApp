import { HttpException, Injectable } from '@nestjs/common';
import { Notification } from '../../domain/entities/notification.model';

@Injectable()
export class CreateOrUpdateNotificationModule {
  private allNotifications: Notification[] = [];

  createOrUpdateNotification(notification: Notification) {
    const newNotification: Notification = new Notification();

    newNotification.id = notification.id;
    newNotification.title = notification.title;
    newNotification.description = notification.description;
    newNotification.readed = notification.readed ?? false;
    newNotification.date = new Date().toLocaleDateString();

    this.allNotifications.push(newNotification);
    console.log('Notifications', this.allNotifications);
  }

  getNotificationById(id: string) {
    const notification = this.allNotifications.find((x) => x.id === id);
    if (notification) {
      return notification;
    } else {
      return new HttpException('No se encontraron notificaciones', 400);
    }
  }
}
