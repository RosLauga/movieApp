import { Module } from '@nestjs/common';
import { NotificationsController } from './infrastructure/controllers/notifications.controller';
import { CreateOrUpdateNotificationModule } from './application/create-or-update-notification/createOrUpdateNotification.use-case';

@Module({
  controllers: [NotificationsController],
  providers: [CreateOrUpdateNotificationModule],
})
export class NotificationsModule {}
