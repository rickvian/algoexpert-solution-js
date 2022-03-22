Array.prototype.peek = function () {
  return this[this.length - 1];
};

const insertIntoRightOrder = (top, array) => {
  if (array.length == 0) {
    array.push(top);
    return;
  }

  let temp;
  if (array.peek() > top) {
    temp = array.pop();

    insertIntoRightOrder(top, array);
  } else {
    array.push(top);
    return;
  }

  array.push(temp);
};

function sortStack(array) {
  if (array.length == 0) {
    return [];
  }

  let top = array.pop();

  sortStack(array);

  insertIntoRightOrder(top, array);
  return array;
}

// Do not edit the line below.
exports.sortStack = sortStack;
