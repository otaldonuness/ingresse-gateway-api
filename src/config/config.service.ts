import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get throttleTTL(): number {
    return this.configService.get<number>('THROTTLE_TTL');
  }

  get throttleLimit(): number {
    return this.configService.get<number>('THROTTLE_LIMIT');
  }

  get mongoURI(): string {
    return this.configService.get<string>('MONGO_URI');
  }

  get mongoDatabase(): string {
    return this.configService.get<string>('MONGO_DB');
  }

  get mongoUsername(): string {
    return this.configService.get<string>('MONGO_USER');
  }

  get mongoPassword(): string {
    return this.configService.get<string>('MONGO_PASS');
  }

  get rabbitMqUri(): string {
    return this.configService.get<string>('RABBITMQ_URI');
  }
  // Add other getters for the rest of your configuration variables
}
