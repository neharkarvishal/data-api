import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkedListModule } from './linked-list/linked-list.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LinkedListModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
