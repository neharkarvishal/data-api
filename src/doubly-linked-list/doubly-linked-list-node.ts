import { Value } from '../type';

export default class DoublyLinkedListNode {
  value!: Value;
  next?: DoublyLinkedListNode;
  previous?: DoublyLinkedListNode;

  constructor(value: Value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  // Return string representation of Linked List Node.
  toString(callback?: Function): string {
    if (callback && typeof callback === 'function') return callback(this.value);

    return `${this.value}`;
  }
}
