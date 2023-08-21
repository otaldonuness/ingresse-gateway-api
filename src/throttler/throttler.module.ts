import { Module } from '@nestjs/common';
import { ThrottlerModule as NestThrottlerModule } from '@nestjs/throttler'; // Renamed import to avoid conflict
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from 'src/config/config.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    NestThrottlerModule.forRootAsync({
      // Use the renamed import here
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.throttleTTL,
        limit: config.throttleLimit,
      }),
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class CustomThrottlerModule {} // Renamed the class to avoid conflict
