import { Injectable } from '@nestjs/common';
import LinkedList from './linked-list';
import LinkedListNode, { Value } from './linked-list-node';

@Injectable()
export class LinkedListService {
  private linkedList: LinkedList = new LinkedList();

  async getLinkedList(): Promise<LinkedList> {
    return this.linkedList;
  }

  async getLinkedListArray(): Promise<LinkedListNode[]> {
    return this.linkedList.toArray();
  }

  async reset() {
    this.linkedList = new LinkedList();
    return this.linkedList;
  }

  async append(value: Value): Promise<LinkedList> {
    const newNode = new LinkedListNode(value);

    // If there is no head yet, make new node the head,
    // else append new node to tail

    if (!this.linkedList.head && !this.linkedList.tail) {
      this.linkedList.head = newNode;
      this.linkedList.tail = newNode;
    } else {
      this.linkedList.tail.next = newNode;
      this.linkedList.tail = newNode;
    }

    return this.linkedList;
  }

  async prepend(value: Value): Promise<LinkedList> {
    this.linkedList.head = new LinkedListNode(value, this.linkedList.head);

    return this.linkedList;
  }
}
