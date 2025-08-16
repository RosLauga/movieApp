import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/user.repository';
import { PrismaService } from '../persistence/prisma.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserDBRepository implements UserRepository {
  constructor(private readonly repositoryService: PrismaService) {}

  async findById(id: string) {
    try {
      const user = await this.repositoryService.user.findFirstOrThrow({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      return new HttpException(
        `Usuario con id ${id} no encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async create(user: User): Promise<User> {
    const newUser = await this.repositoryService.user.create({ data: user });
    return newUser;
  }

  async update(user: User): Promise<User> {
    const updatedUser = await this.repositoryService.user.update({
      data: user,
      where: {
        id: user.id,
      },
    });

    return updatedUser;
  }

  async findAll(): Promise<User[] | []> {
    const users = this.repositoryService.user.findMany();
    return users;
  }
}
