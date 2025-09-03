import { User } from 'src/modules/users/domain/entities/user.entity';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  findAll(): Promise<User[] | []>;
}
