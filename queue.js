// A queue follows the First In, First Out (FIFO) principle.

function createQueue() {
  let items = [];

  return {
    enqueue: (element) => {
      items.push(element);
    },
    dequeue: () => {
      if (items.length === 0) {
        return 'Queue is empty';
      }
      return items.shift();
    },
    peek: () => {
      if (items.length === 0) {
        return 'Queue is empty';
      }
      return items[0];
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
const queue = createQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 20 30
console.log(queue.dequeue()); // Output: 10
queue.print(); // Output: 20 30
console.log(queue.peek()); // Output: 20
