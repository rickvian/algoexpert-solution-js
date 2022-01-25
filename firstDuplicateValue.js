// O (n^2)
function firstDuplicateValue1(array) {
  let firstDuplicateIndex = Infinity;
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        if (j < firstDuplicateIndex) {
          firstDuplicateIndex = j;
        }
      }
    }
  }

  if (firstDuplicateIndex < Infinity) {
    return array[firstDuplicateIndex];
  }

  return -1;
}

const result1 = firstDuplicateValue1([2, 1, 5, 3, 3, 2, 4]);
console.log(result1);

// O (n)
function firstDuplicateValue2(array) {
  const duplicateMap = {}; //{ value : index}

  for (let i = 0; i < array.length; i++) {
    if (duplicateMap[array[i]] >= 0) {
      return array[i];
    } else {
      //undefined
      duplicateMap[array[i]] = i;
    }
  }

  return -1;
}

const result2 = firstDuplicateValue2([2, 1, 5, 2, 3, 3, 4]);
console.log(result2);
