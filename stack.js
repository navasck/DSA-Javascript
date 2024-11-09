// A stack follows the Last In, First Out (LIFO) principle.

function createStack() {
  let items = [];

  // return an object that contains all the methods to interact with the stack. These methods provide the operations that can be performed on the stack.

  return {
    push: (element) => {
      items.push(element);
    },
    pop: () => {
      if (items.length === 0) {
        return 'Stack is empty';
      }
      return items.pop();
    },
    peek: () => {
      if (items.length === 0) {
        return 'Stack is empty';
      }
      return items[items.length - 1];
    },
    isEmpty: () => {
      return items.length === 0;
    },
    size: () => {
      return items.length;
    },
    clear: () => {
      items = [];
    },
    print: () => {
      console.log(items.join(' '));
    },
  };
}

// Example usage:
const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 20 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
stack.print(); // Output: 10 20
