import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NotificationsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
