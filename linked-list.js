/*
  Реализовать структуру данных связный список
*/

class ListNode {
 constructor() { 
 }
}

class LinkedList {
 constructor() {
 }
}

const node1 = new ListNode(2);
const node2 = new ListNode(5);
node1.next = node2;

const list = new LinkedList(node1);

console.log(list.head.next.data); // -> 5
list.size(); // -> list length: 2
list.clear(); // -> undefined
list.getLast(); // -> { value: 5, next: null }
list.getFirst(); // -> { value: 2, next: { value: 5, next: null } }
