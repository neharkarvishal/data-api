import { Module } from '@nestjs/common';
import { DoublyLinkedListController } from './doubly-linked-list.controller';
import { DoublyLinkedListService } from './doubly-linked-list.service';

@Module({
  controllers: [DoublyLinkedListController],
  providers: [DoublyLinkedListService]
})
export class DoublyLinkedListModule {}
