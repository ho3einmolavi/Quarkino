import { Module } from '@nestjs/common';
import * as config from 'config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserModule } from '../common/user/user.module';
import { ProductModule } from '../common/product/product.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    MongooseModule.forRootAsync({
      imports: [AppModule],
      useFactory: async () => ({
        uri: config.get('mongo.url'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
