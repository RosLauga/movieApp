import { Notification } from './entities/notification.entity';

export interface NotificationRepository {
  //   findById(id: string): Promise<Notification | null>;
  create(notification: Notification): Promise<Notification>;
  //   update(notification: Notification): Promise<Notification>;
  findAll(userId: string): Promise<Notification[] | []>;
}
