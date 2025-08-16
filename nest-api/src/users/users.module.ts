import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './application/user.services';
import { PrismaService } from './infracstructure/persistence/prisma.service';
import { UserDBRepository } from './infracstructure/repository/userDB.repository';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService, UserDBRepository],
})
export class UsersModule {}
