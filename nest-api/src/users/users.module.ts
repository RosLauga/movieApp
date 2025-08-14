import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateOrUpdateUserModule } from './application/createOrUpdateUser.use-case';
import { PrismaService } from './infracstructure/persistence/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [CreateOrUpdateUserModule, PrismaService],
})
export class UsersModule {}
