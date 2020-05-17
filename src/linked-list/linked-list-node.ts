export type Value = string | number;

export default class LinkedListNode {
  value!: Value;
  next?: LinkedListNode;

  constructor(value: Value, next = null) {
    this.value = value;
    this.next = next;
  }

  // Return string representation of Linked List Node.
  toString(callback?: Function): string {
    if (callback && typeof callback === 'function') return callback(this.value);

    return `${this.value}`;
  }
}
