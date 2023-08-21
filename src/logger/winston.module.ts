import { Module } from '@nestjs/common';
import { WinstonModule as NestWinstonModule } from 'nest-winston';
import { winstonConfig } from './winston.config';

@Module({
  imports: [NestWinstonModule.forRoot(winstonConfig)],
})
export class WinstonModule {}
