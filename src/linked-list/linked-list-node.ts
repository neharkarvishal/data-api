export default class LinkedListNode {
  private readonly value!: string;
  next?: LinkedListNode;

  constructor(value: string, next = null) {
    this.value = value;
    this.next = next;
  }

  // Return string representation of Linked List Node.
  public toString(callback?: Function): string {
    if (callback && typeof callback === 'function') return callback(this.value);

    return `${this.value}`;
  }
}
