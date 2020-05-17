import { Controller, Get, Param, Post } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import LinkedList from './linked-list';
import LinkedListNode, { Value } from './linked-list-node';

@Controller('/linked-list')
export class LinkedListController {
  constructor(private linkedListService: LinkedListService) {}

  @Get()
  async getLinkedList(): Promise<LinkedList> {
    return this.linkedListService.getLinkedList();
  }

  @Get('/raw')
  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.linkedListService.getLinkedListArray();
  }

  @Post('/reset')
  async reset(): Promise<LinkedList> {
    return this.linkedListService.reset();
  }

  @Post('append/:value')
  async append(@Param('value') value: Value): Promise<LinkedList> {
    return this.linkedListService.append(value);
  }
  @Post('prepend/:value')
  async prepend(@Param('value') value: Value): Promise<LinkedList> {
    return this.linkedListService.prepend(value);
  }
}
