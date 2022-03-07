// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here
    let queue = [this]; // node type

    while (queue.length > 0) {
      // process queue 1 by 1
      const current = queue.shift();
      array.push(current.name);

      for (const child of current.children) {
        queue.push(child); // pushing the children node into
      }
    }

    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
