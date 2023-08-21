import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomThrottlerModule } from './throttler/throttler.module';
import { WinstonModule } from './logger/winston.module';
import { MongooseModule } from './database/mongoose.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, CustomThrottlerModule, WinstonModule, MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
