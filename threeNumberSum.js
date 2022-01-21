// console.log(twoNumberSum([1, 2, 3, 4, 5, 6], 6));

// O(n^2)
// using extra hashmap for each N - not the best
const threeNumberSum1 = (array, targetSum3) => {
  const twoNumberSum = (array, targetSum, currentThirdNumber) => {
    console.log(array);
    console.log(targetSum);
    const sumMap = {}; // { [num]: true }

    let result = [];
    for (let i = 0; i < array.length; i++) {
      // 6 - 1 = 5
      if (sumMap[targetSum - array[i]]) {
        // number exist before
        result.push([currentThirdNumber, targetSum - array[i], array[i]]);
      } else {
        // not yet exist, create new map marker
        sumMap[array[i]] = true;
      }
    }
    console.log(result);
    return result;
  };

  const result = [];

  //array property - unique.

  // sort it.
  // use hash map lookup

  console.log(array.slice(1));

  for (let i = 0; i < array.length - 2; i++) {
    console.log(array[i]);
    console.log(
      twoNumberSum(array.slice(i + 1), targetSum3 - array[i], array[i])
    );
    result.push(
      ...twoNumberSum(array.slice(i + 1), targetSum3 - array[i], array[i])
    );
  }

  console.log(result);
  return result;
};

// console.log(threeNumberSum1([12, 3, 1, 2, -6, 5, -8, 6], 0));

// time  : O(n^2)
// space : O(n)
const threeNumberSum2 = (array, targetSum) => {
  array.sort((a, b) => a - b);

  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i]);
    let leftIndex = i + 1;
    let rightIndex = array.length;

    console.log(leftIndex, rightIndex);

    while (leftIndex < rightIndex) {
      let tripletSum = array[i] + array[leftIndex] + array[rightIndex];
      if (tripletSum == targetSum) {
        // match triplet sum
        result.push([array[i], array[leftIndex], array[rightIndex]]);
      }

      if (tripletSum < targetSum) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }
  return result;
};

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));

// using pointer solution
