import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }
}
