import { Module } from '@nestjs/common';
import { NotificationsController } from './infrastructure/controllers/notifications.controller';
import { NotificationServices } from './application/notifications.service';
import { NotificationDbRepository } from './infrastructure/repository/notificationDb.repository';
import { PrismaService } from 'src/globals/services/prisma.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationServices, PrismaService, NotificationDbRepository],
})
export class NotificationsModule {}
