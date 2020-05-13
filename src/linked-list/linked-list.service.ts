import { Injectable } from '@nestjs/common';
import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';

@Injectable()
export class LinkedListService {
  private linkedList: LinkedList = new LinkedList();

  async getLinkedList(): Promise<LinkedList> {
    return this.linkedList;
  }

  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.linkedList.toArray();
  }
}
