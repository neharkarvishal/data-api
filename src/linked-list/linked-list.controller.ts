import { Controller, Get } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';

@Controller('/linked-list')
export class LinkedListController {
  constructor(private linkedListService: LinkedListService) {}

  @Get('/raw')
  async getLinkedList(): Promise<LinkedList> {
    return this.linkedListService.getLinkedList();
  }

  @Get()
  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.linkedListService.getLinkedListArray();
  }
}
