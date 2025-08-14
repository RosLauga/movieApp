import { User } from 'src/users/entities/user.entity';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  createOrUpdate(user: User): Promise<void>;
  findAll(): Promise<User[] | []>;
}
