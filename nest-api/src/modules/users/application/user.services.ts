import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserDBRepository } from '../infracstructure/repository/userDB.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private userRepository: UserDBRepository) {}

  async createOrUpdateUser(user: User): Promise<User | null> {
    const findUser = await this.getUserById(user.id);
    if (findUser) {
      const updatedUser = Object.assign(findUser, user);
      return this.checkAndUpdate(updatedUser);
    } else {
      const newUser: User = new User();
      newUser.id = uuidv4();
      newUser.name = user.name;
      newUser.lastname = user.lastname;
      newUser.password = user.password;
      newUser.email = user.email;
      return this.checkAndCreate(newUser);
    }
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async checkAndUpdate(user: User): Promise<User | null> {
    const users = await this.userRepository.checkEmail(user.email);
    console.log('check', users);
    const checkEmail = users?.filter((x) => x.id !== user.id);
    if (checkEmail?.length) {
      throw new HttpException(
        `Èl email elegido ya existe en la base de datos`,
        HttpStatus.CONFLICT,
      );
    }
    return this.userRepository.update(user);
  }

  async checkAndCreate(user: User) {
    const users = await this.userRepository.checkEmail(user.email);
    console.log('Checking User', users);
    if (users?.length) {
      throw new HttpException(
        `Èl email elegido ya existe en la base de datos`,
        HttpStatus.CONFLICT,
      );
    } else {
      return this.userRepository.create(user);
    }
  }
}
