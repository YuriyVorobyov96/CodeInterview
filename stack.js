/*
  Реализовать структуру данных стек
*/

class Stack {
  constructor() {
  }
}

const stack = new Stack();

stack.push(5); // -> undefined
stack.pop(); // -> undefined
stack.push(5);
stack.peek(); // -> last element: 5
stack.length(); // -> stack length: 1
stack.isEmpty(); // -> boolean value denoting an empty stack: false
stack.push(3);
stack.push(4);
stack.print(); // -> print all elements from the top to the bottom: [4, 3, 5]
