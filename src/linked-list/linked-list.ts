import LinkedListNode from './linked-list-node';

export default class LinkedList {
  head?: LinkedListNode;
  tail?: LinkedListNode;

  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  async toArray() {
    const nodes: LinkedListNode[] = [];
    let currentNode: LinkedListNode = this.head;

    while (currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
