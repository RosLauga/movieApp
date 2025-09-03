import { UpdateNotificationDto } from '../application/dto/updateNotification.dto';
import { QueryProps } from '../infrastructure/controllers/notifications.controller';
import { Notification } from './entities/notification.entity';

export interface NotificationRepository {
  //   findById(id: string): Promise<Notification | null>;
  create(notification: Notification): Promise<Notification>;
  update(notification: UpdateNotificationDto): Promise<Notification>;
  findAll(query: QueryProps): Promise<Notification[] | []>;
}
