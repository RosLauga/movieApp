import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { NotificationServices } from '../../application/notifications.service';
import { CreateNotificationDto } from '../../application/dto/createNotification.dto';
import { UpdateNotificationDto } from '../../application/dto/updateNotification.dto';

export interface QueryProps {
  userId: string;
  readed?: string;
}

@Controller('/notifications')
export class NotificationsController {
  constructor(private notifications: NotificationServices) {}

  @Get()
  getNotifications(@Query() query: QueryProps) {
    return this.notifications.findAll(query);
  }

  @Post()
  createNotification(@Body() notification: CreateNotificationDto) {
    return this.notifications.create(notification);
  }

  @Put()
  async updateNotification(@Body() notification: UpdateNotificationDto) {
    return this.notifications.update(notification);
  }
}
