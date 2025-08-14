import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { PrismaService } from '../infracstructure/persistence/prisma.service';

@Injectable()
export class CreateOrUpdateUserModule {
  constructor(private prismaDb: PrismaService) {}

  createOrUpdateUser(user: User) {
    const newUser: User = new User();

    newUser.id = user.id;
    newUser.name = user.name;
    newUser.lastname = user.lastname;
    newUser.password = user.password;
    newUser.email = user.email;
  }

  async getUserById() {
    const user = await this.prismaDb.user.findMany();
    console.log('Usuarios', user);
  }
}