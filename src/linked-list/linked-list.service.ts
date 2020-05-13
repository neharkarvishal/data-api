import { Injectable } from '@nestjs/common';
import LinkedList from './linked-list';

@Injectable()
export class LinkedListService {
  private linkedList: LinkedList = new LinkedList();

  async getLinkedList(): Promise<LinkedList> {
    return this.linkedList;
  }
}
