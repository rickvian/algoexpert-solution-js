function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let counter = 0;
  let result = new ListNode(0);
  let currentResult = new ListNode(0);
  let p = l1;
  let q = l2;
  let carry = 0;

  console.log("is same object?", result === currentResult);
  while (p !== null || q !== null) {
    // console.log(p.val)
    // console.log(q.val)

    let sum = p.val + q.val + carry;
    carry = sum > 9 ? 1 : 0;

    if (currentResult == null) {
      currentResult = new ListNode(sum % 10);

      console.log("isNull", currentResult, counter);
    } else {
      result.val = sum % 10;
      currentResult.val = sum % 10;
      currentResult = currentResult.next;
      console.log("isNotNull", currentResult, counter);
    }

    p = p.next;
    q = q.next;
    counter++;
  }

  console.log(currentResult);
};

function arrayToListNode(array) {
  let result;
  let current;
  // result = new ListNode(array[0]);
  // result.next = new ListNode(array[1]);
  // result.next.next =  new ListNode(array[2]);
  // result.next.next.next = new ListNode(array[3]);
  // console.log(result)

  for (let i = 0; i < array.length; i++) {
    if (!result) {
      result = new ListNode(array[i]);
      current = result;
    } else {
      current.next = new ListNode(array[i]);
      current = current.next;
    }

    console.log("current", current);
  }
  console.log("result", result);
}

arrayToListNode([1, 2, 3, 4]);
// addTwoNumbers()
