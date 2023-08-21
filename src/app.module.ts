import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomThrottlerModule } from './throttler/throttler.module';
import { WinstonModule } from './logger/winston.module';
import { MongooseModule } from './database/mongoose.module';
import { ConfigModule } from './config/config.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    WinstonModule,
    PrometheusModule.register({
      defaultLabels: {
        app: 'ingresse-gateway-api',
        path: '/metrics',
      },
    }),
    MongooseModule,
    CustomThrottlerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
