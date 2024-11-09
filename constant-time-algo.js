// O(1) (constant time) algorithm

// The algorithm here is essentially an array indexing operation, which can be considered an O(1) (constant time) algorithm. This means that no matter how large the array is, the time taken to retrieve an element by index is constant and does not depend on the size of the array.

const numbers = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));
