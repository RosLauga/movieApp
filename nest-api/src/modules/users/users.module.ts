import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './application/user.services';
import { UserDBRepository } from './infracstructure/repository/userDB.repository';
import { PrismaService } from 'src/globals/services/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService, UserDBRepository],
})
export class UsersModule {}
