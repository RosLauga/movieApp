import {
  Controller,
  Get,
  Post,
  Query,
  HttpException,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrUpdateNotificationModule } from '../../application/create-or-update-notification/createOrUpdateNotification.use-case';
import { Notification } from '../../domain/entities/notification.model';
import { createOrUpdateNotificationDto } from '../../dto/createOrUpdateNotification.dto';

export interface Query {
  id: string;
}

@Controller('/notifications')
export class NotificationsController {
  constructor(private notification: CreateOrUpdateNotificationModule) {}

  @Get()
  getNotifications(@Query() query: Query) {
    const notification: Notification | HttpException =
      this.notification.getNotificationById(query.id);
    if (notification) {
      return notification;
    } else {
      return new HttpException(`No se han encontrado notificaciones`, 400);
    }
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUpdateNotification(
    @Body() notification: createOrUpdateNotificationDto,
  ) {
    const notificationCreated =
      this.notification.createOrUpdateNotification(notification);
    return notificationCreated;
  }
}
