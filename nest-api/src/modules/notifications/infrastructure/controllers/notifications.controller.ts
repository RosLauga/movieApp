import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NotificationServices } from '../../application/notifications.service';
import { createNotificationDto } from '../../dto/createNotification.dto';

@Controller('/notifications')
export class NotificationsController {
  constructor(private notifications: NotificationServices) {}

  @Get()
  getNotifications(@Query() query: { userId: string }) {
    return this.notifications.findAll(query?.userId);
  }

  @Post()
  createUpdateNotification(@Body() notification: createNotificationDto) {
    return this.notifications.create(notification);
  }
}
