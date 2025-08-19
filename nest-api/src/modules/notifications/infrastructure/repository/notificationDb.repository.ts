import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NotificationRepository } from '../../domain/notifications.repository';
import { Notification } from '../../domain/entities/notification.entity';
import { PrismaService } from 'src/globals/services/prisma.service';

@Injectable()
export class NotificationDbRepository implements NotificationRepository {
  constructor(private readonly notificationRepository: PrismaService) {}

  async findAll(userId: string): Promise<Notification[]> {
    if (userId) {
      const notifications =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        (await this.notificationRepository.notification.findMany({
          where: { userId },
        })) as Notification[];
      return notifications;
    } else {
      throw new HttpException(
        'No existen notificaciones para ese usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async create(notification: Notification): Promise<Notification> {
    const createNotification =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      (await this.notificationRepository.notification.create({
        data: {
          title: notification.title,
          description: notification.description,
          readed: notification.readed,
          user: {
            connect: {
              id: notification.userId,
            },
          },
        },
      })) as Notification;
    return createNotification;
  }
}
