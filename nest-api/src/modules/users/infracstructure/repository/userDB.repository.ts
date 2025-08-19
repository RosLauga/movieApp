import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/globals/services/prisma.service';
import { UserRepository } from 'src/modules/users/domain/user.repository';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class UserDBRepository implements UserRepository {
  constructor(private readonly repositoryService: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.repositoryService.user.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  }

  async create(user: User): Promise<User> {
    const newUser = await this.repositoryService.user.create({ data: user });
    return newUser;
  }

  async update(user: User): Promise<User> {
    try {
      const updatedUser = await this.repositoryService.user.update({
        data: user,
        where: {
          id: user.id,
        },
      });
      return updatedUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.CONFLICT);
    }
  }

  async findAll(): Promise<User[] | []> {
    const users = this.repositoryService.user.findMany();
    return users;
  }

  async checkEmail(email: string): Promise<User[] | null> {
    const user = this.repositoryService.user.findMany({
      where: {
        email,
      },
    });
    return user;
  }
}
