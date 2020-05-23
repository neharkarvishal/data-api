import { Injectable } from '@nestjs/common';
import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';
import DoublyLinkedListNode from '../doubly-linked-list/doubly-linked-list-node';
import { Value } from '../type';

@Injectable()
export class DoublyLinkedListService {
  private list: DoublyLinkedList = new DoublyLinkedList();

  async getLinkedList(): Promise<DoublyLinkedList> {
    return this.list;
  }

  async getLinkedListArray(): Promise<DoublyLinkedListNode[]> {
    return this.list.toArray();
  }

  async reset() {
    this.list = new DoublyLinkedList();
    return this.list;
  }

  async append(value: Value): Promise<DoublyLinkedList> {
    const newNode = new DoublyLinkedListNode(value);

    // If there is no head yet, make new node the head,
    // else append new node to tail

    if (!this.list.head && !this.list.tail) {
      this.list.head = newNode;
      this.list.tail = newNode;
    } else {
      // Attach new node to the end of linked list.
      this.list.tail.next = newNode;

      // Attach current tail to the new node's previous reference.
      newNode.previous = this.list.tail;

      // Set new node to be the tail of linked list.
      this.list.tail = newNode;
    }

    return this.list;
  }

  async prepend(value: Value): Promise<DoublyLinkedList> {
    const newNode = new DoublyLinkedListNode(value, this.list.head)

    // If there is head, then it won't be head anymore.
    // Therefore, make its previous reference to be new node (new head).
    if (this.list.head) {
      this.list.head.previous = newNode;
    }

    // Then mark the new node as head.
    this.list.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.list.tail) {
      this.list.tail = newNode;
    }

    return this.list;
  }
}
