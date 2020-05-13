import LinkedListNode from './linked-list-node';

export default class LinkedList {
  private head?: LinkedListNode;
  private tail?: LinkedListNode;

  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  async toArray() {
    const nodes: LinkedListNode[] = [];
    let concurrentNode: LinkedListNode = this.head;

    while (concurrentNode){
      nodes.push(concurrentNode);
      concurrentNode = concurrentNode.next;
    }

    return nodes;
  }
}
