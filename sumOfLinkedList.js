class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  insert(nextValue) {
    this.next = new linkedList(nextValue);
  }
}

// function sumOfLinkedLists(linkedListOne, linkedListTwo) {
//   // Write your code here.

//   linkedListOne.head =
//   return linkedListOne;
// }

let linkedListOne = new LinkedList(2);

linkedListOne.next = new LinkedList(4);
linkedListOne.next.next = new LinkedList(7);
linkedListOne.next.next.next = new LinkedList(1);

console.log(linkedListOne);

function constructLinkedListFromArray(array, node) {
  if (array.length === 0) return;
  let currentNode;

  if (node === undefined) {
    currentNode = new LinkedList(array[0]);
  }
  array.shift();

  constructLinkedListFromArray(array, currentNode);

  return linkedListOne;
}

const newLinkedList = constructLinkedListFromArray([2, 4, 7, 1]);

console.log(newLinkedList)
// 2 -> 4 -> 7 -> 1
// 9 -> 4 -> 5

// 9 -> 1
// 3 -> 9 -> 8

// 8 -> 1
// 3 -> 9 -> 8 -> 1 -> 1 -> 1
