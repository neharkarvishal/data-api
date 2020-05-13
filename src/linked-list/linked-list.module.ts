import { Module } from '@nestjs/common';
import { LinkedListController } from './linked-list.controller';
import { LinkedListService } from './linked-list.service';

@Module({
  controllers: [LinkedListController],
  providers: [LinkedListService]
})

export class LinkedListModule {}
