import LinkedListNode from './linked-list-node';

export default class LinkedList {
  private head?: LinkedListNode;
  private tail?: LinkedListNode;

  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }
}
