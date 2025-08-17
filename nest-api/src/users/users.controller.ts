import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './application/user.services';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService;
  // }

  @Get()
  async findAll(@Query() query: { id: string }) {
    console.log('ID', query.id);
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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
