import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkedListModule } from './linked-list/linked-list.module';
import { DoublyLinkedListModule } from './doubly-linked-list/doubly-linked-list.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LinkedListModule, DoublyLinkedListModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
