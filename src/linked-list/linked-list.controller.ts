import { Controller, Get } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import LinkedList from './linked-list';

@Controller('/linked-list')
export class LinkedListController {
  constructor(private linkedListService: LinkedListService) {}

  @Get()
  async getLinkedList(): Promise<LinkedList> {
    return this.linkedListService.getLinkedList();
  }
}
