import { Controller, Get } from '@nestjs/common';
import { CreateOrUpdateUserModule } from './application/createOrUpdateUser.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: CreateOrUpdateUserModule) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService;
  // }

  @Get()
  findAll() {
    const user = this.userService.getUserById();
    return user;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
