import { Injectable } from '@nestjs/common';
import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';
import { Value } from '../type';

@Injectable()
export class LinkedListService {
  private list: LinkedList = new LinkedList();

  async getLinkedList(): Promise<LinkedList> {
    return this.list;
  }

  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.list.toArray();
  }

  async reset() {
    this.list = new LinkedList();
    return this.list;
  }

  async append(value: Value): Promise<LinkedList> {
    const newNode = new LinkedListNode(value);

    // If there is no head yet, make new node the head,
    // else append new node to tail

    if (!this.list.head && !this.list.tail) {
      this.list.head = newNode;
      this.list.tail = newNode;
    } else {
      this.list.tail.next = newNode;
      this.list.tail = newNode;
    }

    return this.list;
  }

  async prepend(value: Value): Promise<LinkedList> {
    this.list.head = new LinkedListNode(value, this.list.head);

    return this.list;
  }
}
