import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NotificationRepository } from '../../domain/notifications.repository';
import { Notification } from '../../domain/entities/notification.entity';
import { PrismaService } from 'src/globals/services/prisma.service';
import { UpdateNotificationDto } from '../../dto/updateNotification.dto';
import { QueryProps } from '../controllers/notifications.controller';

@Injectable()
export class NotificationDbRepository implements NotificationRepository {
  constructor(private readonly notificationRepository: PrismaService) {}

  async findAll(params: QueryProps): Promise<Notification[]> {
    const whereOpts = {
      userId: params.userId,
    };
    if (params.userId) {
      if (params.readed)
        whereOpts['readed'] = params.readed == 'true' ? true : false;

      const notifications =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        (await this.notificationRepository.notification.findMany({
          where: whereOpts,
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

  async findById(id: string) {
    const notification =
      await this.notificationRepository.notification.findFirst({
        where: { id },
      });
    return notification;
  }

  async update(notification: UpdateNotificationDto): Promise<Notification> {
    try {
      const notificationUpdated =
        await this.notificationRepository.notification.update({
          data: {
            readed: !notification.readed,
          },
          where: {
            id: notification.id,
          },
        });
      return notificationUpdated;
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }
}
