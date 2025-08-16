import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserDBRepository } from '../infracstructure/repository/userDB.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private userRepository: UserDBRepository) {}

  async createOrUpdateUser(user: User) {
    const findUser = await this.getUserById(user.id);
    console.log('Usuario', user);
    if (findUser) {
      const updatedUser = Object.assign(findUser, user);
      await this.userRepository.update(updatedUser);
    } else {
      const newUser: User = new User();

      newUser.id = uuidv4();
      newUser.name = user.name;
      newUser.lastname = user.lastname;
      newUser.password = user.password;
      newUser.email = user.email;

      await this.userRepository.create(newUser);
    }
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
