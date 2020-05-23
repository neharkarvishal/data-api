import DoublyLinkedListNode from './doubly-linked-list-node';

export default class DoublyLinkedList {
  head?: DoublyLinkedListNode;
  tail?: DoublyLinkedListNode;

  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  async toArray() {
    const nodes: DoublyLinkedListNode[] = [];
    let currentNode: DoublyLinkedListNode = this.head;

    while (currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
