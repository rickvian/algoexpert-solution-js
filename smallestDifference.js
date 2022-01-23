// brute force
const smallestDifference1 = (arrayOne, arrayTwo) => {
  console.log(arrayOne.sort((a, b) => a - b));
  console.log(arrayTwo.sort((a, b) => a - b));

  let smallestDifference = Infinity;
  let result = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      console.log(arrayOne[i], arrayTwo[j]);

      const currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (currentDifference < smallestDifference) {
        smallestDifference = currentDifference;
        result = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return result;
};

// const result = smallestDifference1([-1, 5, 10, 20, 28, 3, 27], [26, 134, 135, 15, 17]);

// more optimal solution
const smallestDifference2 = (arrayOne, arrayTwo) => {
  // o(N log n)
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestDiff = Infinity;
  let result = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    // define stop case
    const currDiff = Math.abs(arrayOne[p1] - arrayTwo[p2]);
    if (currDiff < smallestDiff) {
      smallestDiff = currDiff;
      result = [arrayOne[p1], arrayTwo[p2]];
    }
    // decide which pointer to move
    if (arrayOne[p1] < arrayTwo[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
};

const result = smallestDifference2(
  [-1, 5, 10, 20, 28, 3],
  [26, 134, 135, 15, 17]
);

console.log(result);
