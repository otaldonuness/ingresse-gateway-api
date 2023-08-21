import { Injectable } from '@nestjs/common';
import { RabbitMQService } from '../rabbitmq/rabbitmq.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private rabbitMQService: RabbitMQService) {}

  async createUser(userDto: CreateUserDTO): Promise<any> {
    const queue = 'user_queue';
    const pattern = { cmd: 'create-user' };
    const payload = userDto;

    return await this.rabbitMQService.sendMessage(queue, { pattern, payload });
  }
}
