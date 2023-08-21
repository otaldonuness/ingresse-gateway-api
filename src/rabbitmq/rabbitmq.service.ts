import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '../config/config.service';

@Injectable()
export class RabbitMQService implements OnModuleDestroy {
  private client;

  constructor(private configService: ConfigService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.rabbitMqUri],
        queue: 'user_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.close();
  }

  async sendMessage(queue: string, message: any): Promise<any> {
    message = JSON.stringify(message);
    const pattern = { cmd: queue };

    try {
      return await this.client.send(pattern, message).toPromise();
    } catch (error) {
      throw new Error('Failed to send message');
    }
  }
}
