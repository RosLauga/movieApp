import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { UserService } from './application/user.services';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query() query: { id: string }) {
    if (query.id) {
      const userById = await this.userService.getUserById(query.id);
      return userById;
    } else {
      const user = await this.userService.getAllUsers();
      return user;
    }
  }

  @Post()
  async createOrUpdate(@Body() user: CreateUserDto) {
    const newUser = await this.userService.createOrUpdateUser(user);
    return newUser;
  }

  @Put()
  async update(@Body() user: CreateUserDto) {
    const newUser = await this.userService.createOrUpdateUser(user);
    return newUser;
  }
}
