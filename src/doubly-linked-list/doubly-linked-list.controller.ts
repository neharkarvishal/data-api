import { Controller, Get, Param, Post } from '@nestjs/common';
import { DoublyLinkedListService } from './doubly-linked-list.service';
import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';
import DoublyLinkedListNode from '../doubly-linked-list/doubly-linked-list-node';
import { Value } from '../type';

@Controller('doubly-linked-list')
export class DoublyLinkedListController {
  constructor(private listService: DoublyLinkedListService) {}

  @Get()
  async getLinkedList(): Promise<DoublyLinkedList> {
    return this.listService.getLinkedList();
  }

  @Get('/raw')
  async getLinkedListArray(): Promise<DoublyLinkedListNode[]> {
    return this.listService.getLinkedListArray();
  }

  @Post('/reset')
  async reset(): Promise<DoublyLinkedList> {
    return this.listService.reset();
  }

  @Post('append/:value')
  async append(@Param('value') value: Value): Promise<DoublyLinkedList> {
    return this.listService.append(value);
  }

  @Post('prepend/:value')
  async prepend(@Param('value') value: Value): Promise<DoublyLinkedList> {
    return this.listService.prepend(value);
  }
}
