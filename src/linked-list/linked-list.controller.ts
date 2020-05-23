import { Controller, Get, Param, Post } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';
import { Value } from '../type';

@Controller('/linked-list')
export class LinkedListController {
  constructor(private listService: LinkedListService) {}

  @Get()
  async getLinkedList(): Promise<LinkedList> {
    return this.listService.getLinkedList();
  }

  @Get('/raw')
  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.listService.getLinkedListArray();
  }

  @Post('/reset')
  async reset(): Promise<LinkedList> {
    return this.listService.reset();
  }

  @Post('append/:value')
  async append(@Param('value') value: Value): Promise<LinkedList> {
    return this.listService.append(value);
  }

  @Post('prepend/:value')
  async prepend(@Param('value') value: Value): Promise<LinkedList> {
    return this.listService.prepend(value);
  }
}
