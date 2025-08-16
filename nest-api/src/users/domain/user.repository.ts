import { HttpException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

export interface UserRepository {
  findById(id: string): Promise<User | HttpException>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  findAll(): Promise<User[] | []>;
}
