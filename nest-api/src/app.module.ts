import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { UsersModule } from './modules/users/users.module';
import { MoviesModule } from './modules/movies/movies.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [NotificationsModule, UsersModule, MoviesModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
