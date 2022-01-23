// nLog(n) + n + n
// nLog(n) + 2n
// => nLog(n)
const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b); // O n Log n - with best sort method
  // console.log(arr);

  let diffArray = [];
  let smallestDiff = Infinity;
  let resultArr = [];

  // get all diff in arr ( O(n) )
  for (let i = 0; i < arr.length - 1; i++) {
    currentDiff = Math.abs(arr[i + 1] - arr[i]);
    // console.log(Math.abs(arr[i + 1] - arr[i]));
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
    }
    // console.log(smallestDiff);
  }

  // collect smallest diffs (O (n))
  for (let i = 0; i < arr.length - 1; i++) {
    currentDiff = Math.abs(arr[i + 1] - arr[i]);
    if (currentDiff == smallestDiff) {
      resultArr.push([arr[i], arr[i + 1]]);
    }
  }
  // console.log(resultArr);
  return resultArr;
};

// const results = minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
const results = minimumAbsDifference([4, 2, 1, 3]);
//expected  [[-14,-10],[19,23],[23,27]]

console.log(results);
